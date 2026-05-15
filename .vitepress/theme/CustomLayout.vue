<script setup>
import { useData, useRoute, withBase } from 'vitepress'
import { computed, ref, onMounted, watch } from 'vue'
import { VPNavBarSearch } from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'

const { theme, site, isDark } = useData()
const route = useRoute()

// 主题切换
function toggleTheme() {
  isDark.value = !isDark.value
}

// 移动端菜单
const mobileMenuOpen = ref(false)
const expandedMobileGroup = ref(null)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) expandedMobileGroup.value = null
}

function toggleMobileGroup(text) {
  expandedMobileGroup.value = expandedMobileGroup.value === text ? null : text
}

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
        
        <!-- 右侧：导航链接 + 主题切换 -->
        <nav class="header-nav desktop-nav">
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
          <!-- 主题切换按钮 -->
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到暗黑模式'" aria-label="切换主题">
            <div class="toggle-track" :class="{ dark: isDark }">
              <span class="toggle-thumb">
                <svg v-if="!isDark" class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg v-else class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </span>
            </div>
          </button>
        </nav>

        <!-- 移动端：汉堡按钮 + 主题切换 -->
        <div class="mobile-controls">
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到浅色模式' : '切换到暗黑模式'" aria-label="切换主题">
            <div class="toggle-track" :class="{ dark: isDark }">
              <span class="toggle-thumb">
                <svg v-if="!isDark" class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <svg v-else class="theme-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </span>
            </div>
          </button>
          <button class="hamburger-btn" @click="toggleMobileMenu" aria-label="菜单">
            <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
            <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- 移动端菜单遮罩 -->
    <div v-if="mobileMenuOpen" class="mobile-overlay" @click="toggleMobileMenu"></div>

    <!-- 移动端侧滑菜单 -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <template v-for="item in theme.nav" :key="item.text">
            <div v-if="item.items" class="mobile-group">
              <button class="mobile-group-trigger" @click="toggleMobileGroup(item.text)">
                {{ item.text }}
                <svg class="mobile-arrow" :class="{ expanded: expandedMobileGroup === item.text }" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div v-show="expandedMobileGroup === item.text" class="mobile-sub-items">
                <template v-for="sub in item.items" :key="sub.text">
                  <template v-if="sub.items">
                    <div class="mobile-sub-title">{{ sub.text }}</div>
                    <a v-for="leaf in sub.items" :key="leaf.link" :href="withBase(leaf.link)" class="mobile-item" @click="toggleMobileMenu">{{ leaf.text }}</a>
                  </template>
                  <a v-else :href="withBase(sub.link)" class="mobile-item" @click="toggleMobileMenu">{{ sub.text }}</a>
                </template>
              </div>
            </div>
            <a v-else :href="withBase(item.link)" class="mobile-link" @click="toggleMobileMenu">{{ item.text }}</a>
          </template>
        </div>
      </div>
    </transition>

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
  justify-content: space-between;
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
  gap: 20px;
  flex-shrink: 1;
  min-width: 0;
}

.nav-dropdown {
  position: relative;
  flex-shrink: 0;
}

.nav-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.2px;
  white-space: nowrap;
  flex-shrink: 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--vp-c-brand);
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

/* 主题切换按钮 - 滑轨式 */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 4px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.toggle-track {
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background: #E4E7EB;
  position: relative;
  transition: background 0.3s ease;
}

.toggle-track.dark {
  background: #3B3F47;
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
}

.toggle-track.dark .toggle-thumb {
  transform: translateX(18px);
  background: #1A1A2E;
}

.theme-icon {
  color: #F59E0B;
  transition: color 0.3s ease;
}

.toggle-track.dark .theme-icon {
  color: #A5B4FC;
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

/* ========== 移动端控件（默认隐藏） ========== */
.mobile-controls {
  display: none;
  align-items: center;
  gap: 12px;
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--vp-c-text-1);
  border-radius: 1px;
  transition: all 0.3s ease;
}

.hamburger-line.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* 移动端遮罩 */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

/* 移动端侧滑菜单 */
.mobile-menu {
  position: fixed;
  top: 64px;
  right: 0;
  width: 280px;
  max-width: 80vw;
  height: calc(100vh - 64px);
  background: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  overflow-y: auto;
  z-index: 200;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.08);
}

.mobile-menu-content {
  padding: 16px 0;
}

.mobile-link {
  display: block;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: background 0.15s;
}

.mobile-link:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.mobile-group-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
}

.mobile-group-trigger:hover {
  background: var(--vp-c-bg-soft);
}

.mobile-arrow {
  transition: transform 0.2s ease;
  color: var(--vp-c-text-3);
}

.mobile-arrow.expanded {
  transform: rotate(180deg);
}

.mobile-sub-items {
  background: var(--vp-c-bg-alt);
  padding: 4px 0;
}

.mobile-sub-title {
  padding: 8px 24px 4px 32px;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mobile-item {
  display: block;
  padding: 8px 24px 8px 40px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.15s;
}

.mobile-item:hover {
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

/* 侧滑动画 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* ========== 响应式适配 ========== */
@media (max-width: 1400px) {
  .header-nav {
    gap: 16px;
  }
}

@media (max-width: 1200px) {
  .header-container {
    padding: 0 20px;
  }

  .header-left {
    gap: 12px;
  }

  .header-nav {
    gap: 12px;
  }

  .nav-link {
    font-size: 12px;
  }

  .site-title {
    font-size: 16px;
  }
}

@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .mobile-controls {
    display: flex;
  }

  .site-title {
    display: none;
  }

  .header-left {
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .custom-sidebar {
    display: none;
  }
  
  .custom-content:not(.no-sidebar) {
    margin-left: 0;
  }

  .header-container {
    padding: 0 12px;
  }

  .header-search {
    display: none;
  }
}
</style>
