<script setup>
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import { VPNavBarSearch } from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'

const { theme, site } = useData()
const route = useRoute()

// 获取当前路径对应的侧边栏
const currentSidebar = computed(() => {
  const sidebar = theme.value.sidebar
  if (!sidebar) return []
  
  // 按路径匹配侧边栏
  for (const [path, items] of Object.entries(sidebar)) {
    if (route.path.startsWith(path)) {
      return items
    }
  }
  
  return sidebar['/'] || []
})

// 判断是否显示侧边栏
const showSidebar = computed(() => {
  const path = route.path
  // 项目实战和关于页不显示侧边栏
  return path !== '/projects/' && path !== '/about' && path !== '/about.html'
})

// 判断是否是首页
const isHomePage = computed(() => route.path === '/')

// 判断是否是特殊页面（不显示侧边栏）
const isSpecialPage = computed(() => {
  const path = route.path
  // 首页、项目实战和关于页不显示侧边栏
  return path === '/' || path === '/projects/' || path === '/projects' || path === '/about' || path === '/about.html'
})

// 判断是否是关于页
const isAboutPage = computed(() => route.path === '/about' || route.path === '/about.html')
</script>

<template>
  <div class="custom-layout">
    <!-- 自定义导航栏 -->
    <header class="custom-header">
      <div class="header-container">
        <!-- 左侧：Logo + 网站名称 + 搜索 -->
        <div class="header-left">
          <a href="/" class="logo-link">
            <img src="/logo.svg" alt="Java全栈实战录 Logo" class="site-logo" />
          </a>
          <a href="/" class="site-title">Java全栈实战录</a>
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
                <a 
                  v-for="subItem in item.items" 
                  :key="subItem.link"
                  :href="subItem.link"
                  class="dropdown-item"
                >
                  {{ subItem.text }}
                </a>
              </div>
            </div>
            <!-- 普通导航项 -->
            <a 
              v-else
              :href="item.link"
              class="nav-link"
              :class="{ active: route.path === item.link || route.path.startsWith(item.link) }"
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
                :class="{ active: route.path === item.link }"
              >
                <a :href="item.link">{{ item.text }}</a>
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
  gap: 40px;
}

.nav-link {
  font-size: 17px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.5px;
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
  padding: 8px 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
}

.dropdown-item {
  display: block;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.2s ease;
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
