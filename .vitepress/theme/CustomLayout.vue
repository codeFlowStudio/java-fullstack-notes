<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { computed } from 'vue'
import { VPNavBarSearch } from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'

const { theme, site } = useData()
const route = useRoute()

// 统一剧本：剧去 base 前缀与 index.html 后缀，用于路由判断
const normalizedPath = computed(() => {
  let p = route.path || '/'
  const base = site.value.base || '/'
  if (base !== '/' && p.startsWith(base)) {
    p = p.slice(base.length - 1) || '/'
  }
  // 去掉 .html 后缀、处理 /index
  p = p.replace(/index\.html?$/, '').replace(/\.html?$/, '')
  if (p === '') p = '/'
  return p
})

// 获取当前路径对应的侧边栏
const currentSidebar = computed(() => {
  const sidebar = theme.value.sidebar
  if (!sidebar) return []
  
  // 按路径匹配侧边栏
  for (const [path, items] of Object.entries(sidebar)) {
    if (path !== '/' && normalizedPath.value.startsWith(path)) {
      return items
    }
  }
  
  return sidebar['/'] || []
})

// 判断是否显示侧边栏
const showSidebar = computed(() => {
  const path = normalizedPath.value
  return path !== '/projects/' && path !== '/about' && path !== '/about.html'
})

// 判断是否是首页
const isHomePage = computed(() => normalizedPath.value === '/')

// 判断是否是特殊页面（不显示侧边栏）
const isSpecialPage = computed(() => {
  const path = normalizedPath.value
  return path === '/' || path === '/projects/' || path === '/projects' || path === '/about' || path === '/about.html' || path === '/about/'
})

// 判断是否是关于页
const isAboutPage = computed(() => {
  const p = normalizedPath.value
  return p === '/about' || p === '/about.html' || p === '/about/'
})
</script>

<template>
  <div class="custom-layout">
    <!-- 自定义导航栏 -->
    <header class="custom-header">
      <div class="header-container">
        <!-- 左侧：Logo + 网站名称 + 搜索 -->
        <div class="header-left">
          <a :href="withBase('/')" class="logo-link">
            <img :src="withBase('/logo.svg')" alt="Java全栈实战录 Logo" class="site-logo" />
          </a>
          <a :href="withBase('/')" class="site-title">Java全栈实战录</a>
          <div class="header-search">
            <VPNavBarSearch />
          </div>
        </div>
        
        <!-- 右侧：导航链接 -->
        <nav class="header-nav">
          <template v-for="item in theme.nav" :key="item.text">
            <!-- 有子菜单的导航项 -->
            <div v-if="item.items" class="nav-dropdown">
              <button class="nav-link nav-dropdown-trigger">
                {{ item.text }}
                <svg class="dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              <div class="dropdown-menu">
                <template v-for="(subItem, idx) in item.items" :key="subItem.text">
                  <!-- 嵌套分组：有 items 则渲染为分组标题 + 子链接 -->
                  <div v-if="subItem.items" class="dropdown-group" :class="{ 'has-divider': idx > 0 }">
                    <div class="dropdown-group-title">{{ subItem.text }}</div>
                    <a
                      v-for="leaf in subItem.items"
                      :key="leaf.link"
                      :href="withBase(leaf.link)"
                      class="dropdown-item"
                    >
                      {{ leaf.text }}
                    </a>
                  </div>
                  <!-- 普通链接项 -->
                  <a
                    v-else
                    :href="withBase(subItem.link)"
                    class="dropdown-item"
                  >
                    {{ subItem.text }}
                  </a>
                </template>
              </div>
            </div>
            <!-- 普通导航项 -->
            <a 
              v-else
              :href="withBase(item.link)"
              class="nav-link"
              :class="{ active: normalizedPath === item.link || (item.link !== '/' && normalizedPath.startsWith(item.link)) }"
            >
              {{ item.text }}
            </a>
          </template>
        </nav>
      </div>
    </header>

    <!-- 主内容区 -->
    <div class="main-container">
      <!-- 左侧菜单（仅常规页面显示） -->
      <aside v-if="!isSpecialPage && currentSidebar.length > 0" class="custom-sidebar">
        <div class="sidebar-content">
          <div 
            v-for="group in currentSidebar" 
            :key="group.text"
            class="sidebar-group"
          >
            <div class="group-title">{{ group.text }}</div>
            <ul class="group-items">
              <li 
                v-for="item in group.items" 
                :key="item.link"
                class="sidebar-item"
                :class="{ active: normalizedPath === item.link }"
              >
                <a :href="withBase(item.link)">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- 右侧内容 -->
      <main class="custom-content" :class="{ 'has-sidebar': !isSpecialPage, 'no-sidebar': isSpecialPage }">
        <!-- 首页显示 HomePage 组件 -->
        <HomePage v-if="isHomePage" />
        <!-- 关于页显示 AboutPage 组件 -->
        <AboutPage v-else-if="isAboutPage" />
        <!-- 其他页面显示内容 -->
        <div v-else class="vp-doc">
          <Content />
        </div>
      </main>
    </div>

    <!-- 底部 Footer -->
    <SiteFooter />

    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<style scoped>
.custom-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ========== 导航栏 ========== */
.custom-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  z-index: 100;
}

.header-container {
  max-width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.site-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.site-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: 0.5px;
}

.site-title:hover {
  color: var(--vp-c-brand);
}

.header-search {
  display: flex;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.3px;
}

.nav-link:hover,
.nav-link.active {
  color: var(--vp-c-brand);
}

/* 下拉菜单 */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-icon {
  transition: transform 0.2s ease;
}

.nav-dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  padding: 10px 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

/* 分组容器 */
.dropdown-group {
  padding: 6px 0;
}

.dropdown-group.has-divider {
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 6px;
  padding-top: 10px;
}

/* 分组标题 */
.dropdown-group-title {
  padding: 4px 20px 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: 0.4px;
  text-transform: none;
}

.dropdown-item {
  display: block;
  padding: 7px 20px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.18s ease;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

/* ========== 主内容区 ========== */
.main-container {
  margin-top: 64px;
  display: flex;
  flex: 1;
}

/* ========== 左侧菜单 ========== */
.custom-sidebar {
  width: 20%;
  min-width: 240px;
  max-width: 320px;
  padding: 24px 16px;
  background: var(--vp-c-bg);
  border-right: 1px solid var(--vp-c-divider);
  overflow-y: auto;
  position: sticky;
  top: 64px;
  height: calc(100vh - 64px);
  left: 0;
  flex-shrink: 0;
}

.sidebar-content {
  padding-left: 16px;
}

.sidebar-group {
  margin-bottom: 24px;
}

.group-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  padding: 8px 0;
  margin-bottom: 8px;
}

.group-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 4px;
}

.sidebar-item a {
  display: block;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s;
}

.sidebar-item a:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.sidebar-item.active a {
  background: var(--vp-c-brand-lighter);
  color: var(--vp-c-brand);
  font-weight: 600;
}

/* ========== 右侧内容 ========== */
.custom-content {
  flex: 1;
  padding: 32px 30px;
  max-width: 100%;
}

/* 有侧边栏的页面需要左边距 */
.custom-content.has-sidebar {
  margin-left: 20%;
}

.custom-content.no-sidebar {
  margin-left: 0 !important;
  max-width: 1400px;
  margin: 0 auto !important;
  padding: 48px 30px;
  width: 100%;
}

@media (max-width: 768px) {
  .custom-sidebar {
    display: none;
  }
  
  .custom-content:not(.no-sidebar) {
    margin-left: 0;
  }
}
</style>
