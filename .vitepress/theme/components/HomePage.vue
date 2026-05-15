<script setup>
import { ref, computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { completedProjects, ongoingProjects } from '../data/projects.js'

const { theme } = useData()

// 卡片基础信息（不含动态字段 count）；sidebarKey 用于从 sidebar 配置中统计文章数
const baseCards = [
  {
    title: 'Java',
    subtitle: 'Java Core / Concurrency / JVM',
    desc: '基础语法、面向对象、集合容器、并发编程、JVM 内存与 GC 调优等核心知识',
    topics: ['基础语法', '集合容器', '并发编程', 'JVM'],
    color: 'blue',
    icon: '☕',
    sidebarKey: '/java/',
    link: '/java/basics/language-features'
  },
  {
    title: '框架｜中间件',
    subtitle: 'Spring / MyBatis / MQ / RPC / Netty',
    desc: 'Spring 全家桶、MyBatis 源码、消息队列、RPC 服务治理、Netty 与分库分表',
    topics: ['Spring', 'Spring Cloud', 'MQ', 'Dubbo', 'Netty'],
    color: 'green',
    icon: '🌱',
    sidebarKey: '/framework/',
    link: '/framework/spring/ioc'
  },
  {
    title: '数据库',
    subtitle: 'MySQL / Redis / ES / MongoDB',
    desc: 'MySQL 索引/事务/锁/调优，Redis 数据结构与集群，ES 倒排索引，MongoDB 文档模型',
    topics: ['MySQL', 'Redis', 'ElasticSearch', 'MongoDB'],
    color: 'purple',
    icon: '💾',
    sidebarKey: '/database/',
    link: '/database/sql/mysql/architecture'
  },
  {
    title: '数据结构｜算法',
    subtitle: 'Data Structures & Algorithms',
    desc: '数组链表、哈希表、栈队列、树图堆，双指针、动态规划、回溯贪心、排序分治等',
    topics: ['数据结构', '动态规划', '双指针', '架构师视角'],
    color: 'orange',
    icon: '🧮',
    sidebarKey: '/algorithm/',
    link: '/algorithm/ds/array-list'
  },
  {
    title: '架构｜设计',
    subtitle: 'System Design & Patterns',
    desc: '分布式、高性能、高可用、架构演进与 DDD 建模，以及 23 种设计模式深度应用',
    topics: ['分布式', '高可用', 'DDD', '设计模式'],
    color: 'red',
    icon: '🏛️',
    sidebarKey: '/architecture/',
    link: '/architecture/system/distributed/cap-base'
  },
  {
    title: '计算机基础',
    subtitle: 'Network / OS / Linux',
    desc: '计算机网络、操作系统、网络编程（BIO/NIO/epoll）、Linux 性能诊断与 Shell',
    topics: ['TCP/HTTP', '操作系统', 'epoll', 'Linux'],
    color: 'teal',
    icon: '🖥️',
    sidebarKey: '/cs/',
    link: '/cs/network/layered-model'
  },
  {
    title: '工程｜部署',
    subtitle: 'Docker / K8s / CI-CD',
    desc: '容器化部署、Kubernetes 编排、CI/CD 流水线、监控与日志体系搭建',
    topics: ['Docker', 'Kubernetes', 'CI/CD', '监控'],
    color: 'blue',
    icon: '🐳',
    sidebarKey: '/devops/',
    link: '/devops/container/docker/core'
  },
  {
    title: '场景解决方案',
    subtitle: 'Real-world Solutions',
    desc: '秒杀系统、订单超时、分布式登录、幂等设计、海量数据、限流熔断等场景实战',
    topics: ['秒杀', '幂等', '一致性', '限流熔断'],
    color: 'orange',
    icon: '🚀',
    sidebarKey: '/scenarios/',
    link: '/scenarios/trade/seckill'
  },
  {
    title: '工具｜经验',
    subtitle: 'Toolchain & Methodology',
    desc: 'Git/Maven/单测工具链，代码规范、接口设计、技术写作、性能调优、故障排查方法论',
    topics: ['Git', 'Maven', '代码规范', '故障排查'],
    color: 'green',
    icon: '🛠️',
    sidebarKey: '/tools/',
    link: '/tools/git'
  }
]

// 工具：根据 sidebarKey 统计文章数 / 子分组数
function articlesOf(key) {
  const groups = theme.value.sidebar?.[key] || []
  return groups.reduce((sum, g) => sum + (g.items?.length || 0), 0)
}
function groupsOf(key) {
  return (theme.value.sidebar?.[key] || []).length
}

// 知识卡片：count 字段动态计算
const knowledgeCards = computed(() =>
  baseCards.map(c => ({ ...c, count: `${articlesOf(c.sidebarKey)} 篇`, updated: '持续更新' }))
)

// 全站统计：动态汇总
const stats = computed(() => {
  const keys = baseCards.map(c => c.sidebarKey)
  let totalArticles = 0
  let totalGroups = 0
  for (const key of keys) {
    totalArticles += articlesOf(key)
    totalGroups += groupsOf(key)
  }
  return {
    totalArticles,
    totalModules: baseCards.length,
    totalGroups,
    totalProjects: completedProjects.length + ongoingProjects.length
  }
})

const learningPaths = ref([
  { num: 1, title: 'Java 基础', desc: '语法、OOP、集合、泛型、反射', link: '/java/basics/language-features' },
  { num: 2, title: '并发与 JVM', desc: 'JMM、线程池、AQS、GC 调优', link: '/java/concurrency/thread-basics' },
  { num: 3, title: '框架与中间件', desc: 'Spring 全家桶、MyBatis、MQ、RPC', link: '/framework/spring/ioc' },
  { num: 4, title: '架构与实战', desc: '分布式、高可用、DDD、场景方案', link: '/architecture/system/distributed/cap-base' }
])

const featuredArticles = ref([
  {
    title: 'Spring IOC 容器原理',
    path: '框架 / Spring',
    tag: '高频面试',
    link: '/framework/spring/ioc'
  },
  {
    title: 'HashMap 深度剖析',
    path: 'Java / 集合容器',
    tag: '必读',
    link: '/java/collections/hashmap'
  },
  {
    title: 'MySQL 索引原理与优化',
    path: '数据库 / MySQL',
    tag: '实战',
    link: '/database/sql/mysql/index'
  },
  {
    title: 'AQS 框架源码',
    path: 'Java / 并发编程',
    tag: '深度',
    link: '/java/concurrency/aqs'
  },
  {
    title: '分布式锁',
    path: '架构 / 分布式',
    tag: '场景',
    link: '/architecture/system/distributed/lock'
  }
])

const friendLinks = ref([
  { name: 'Vue.js 官方文档', url: 'https://cn.vuejs.org/', desc: '渐进式 JavaScript 框架' },
  { name: 'VitePress', url: 'https://vitepress.dev/', desc: 'Vite 驱动的静态站点生成器' },
  { name: 'Spring 官方', url: 'https://spring.io/', desc: 'Spring 生态系统' },
  { name: 'Java 官方文档', url: 'https://docs.oracle.com/en/java/', desc: 'Oracle Java 文档' },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', desc: 'Web 开发者文档' },
  { name: 'GitHub', url: 'https://github.com/', desc: '全球最大代码托管平台' },
])
</script>

<template>
  <div class="home-custom">
    <div class="home-container">
      <div class="hero-section">
        <h1 class="hero-title">
          Java <span class="highlight">全栈</span>实战录
        </h1>
        <p class="hero-desc">
          源自一线实战，专注 Java 全栈技术栈。覆盖后端、框架、中间件、数据库、分布式、前端等核心技术，助你构建完整知识体系
        </p>
        
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="num">{{ stats.totalArticles }}</div>
            <div class="label">篇文章</div>
          </div>
          <div class="hero-stat">
            <div class="num">{{ stats.totalModules }}</div>
            <div class="label">大知识模块</div>
          </div>
          <div class="hero-stat">
            <div class="num">{{ stats.totalGroups }}</div>
            <div class="label">子分类专栏</div>
          </div>
          <div class="hero-stat">
            <div class="num">{{ stats.totalProjects }}</div>
            <div class="label">个实战项目</div>
          </div>
        </div>
      </div>

      <div class="section-header">
        <div class="section-icon">🎯</div>
        <h2>知识体系总览</h2>
        <span class="section-desc">点击任意模块进入学习</span>
      </div>

      <div class="knowledge-grid">
        <a 
          v-for="(card, index) in knowledgeCards" 
          :key="index"
          :href="withBase(card.link)"
          class="knowledge-card"
          :class="card.color"
        >
          <div class="card-header">
            <div class="card-icon" :class="card.color">{{ card.icon }}</div>
            <div>
              <div class="card-title">{{ card.title }}</div>
              <div class="card-subtitle">{{ card.subtitle }}</div>
            </div>
          </div>
          <div class="card-desc">{{ card.desc }}</div>
          <div class="card-topics">
            <span v-for="(topic, i) in card.topics" :key="i" class="card-topic">
              {{ topic }}
            </span>
          </div>
          <div class="card-footer">
            <span>📄 {{ card.count }}</span>
            <span>🕒 {{ card.updated }}</span>
          </div>
        </a>
      </div>

      <div class="path-section">
        <div class="section-header">
          <div class="section-icon path-icon">🛤️</div>
          <h2>推荐学习路线</h2>
        </div>
        
        <div class="path-cards">
          <a 
            v-for="path in learningPaths" 
            :key="path.num"
            :href="withBase(path.link)"
            class="path-card"
          >
            <div class="path-num">{{ path.num }}</div>
            <div class="path-title">{{ path.title }}</div>
            <div class="path-desc">{{ path.desc }}</div>
          </a>
        </div>
      </div>

      <div class="section-header">
        <div class="section-icon">⭐</div>
        <h2>精选推荐</h2>
      </div>

      <div class="recent-list">
        <a 
          v-for="(article, index) in featuredArticles" 
          :key="index"
          :href="withBase(article.link)"
          class="recent-item"
        >
          <div class="ri-icon">⭐</div>
          <div class="ri-content">
            <div class="ri-title">{{ article.title }}</div>
            <div class="ri-path">{{ article.path }}</div>
          </div>
          <span class="ri-date">{{ article.tag }}</span>
        </a>
      </div>

      <div class="section-header">
        <div class="section-icon">🔗</div>
        <h2>友情链接</h2>
      </div>

      <div class="friend-links">
        <a 
          v-for="(link, index) in friendLinks" 
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="friend-link"
        >
          <div class="fl-icon">🌐</div>
          <div class="fl-content">
            <div class="fl-name">{{ link.name }}</div>
            <div class="fl-desc">{{ link.desc }}</div>
          </div>
          <div class="fl-arrow">→</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
}

.hero-section {
  text-align: center;
  padding: 60px 0;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  color: var(--vp-c-text-1);
}

.hero-title .highlight {
  color: var(--vp-c-green);
}

.hero-desc {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin-bottom: 36px;
  line-height: 1.8;
}

.hero-stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
  margin-top: 36px;
}

@media (max-width: 640px) {
  .hero-stats {
    gap: 24px 32px;
  }
}

.hero-stat {
  text-align: center;
}

.hero-stat .num {
  font-size: 32px;
  font-weight: 800;
  color: var(--vp-c-text-1);
}

.hero-stat .label {
  font-size: 15px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  margin-top: 64px;
}

.section-header:first-child {
  margin-top: 0;
}

.section-icon {
  width: 40px;
  height: 40px;
  background: var(--vp-c-brand-lighter);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.path-icon {
  background: var(--vp-c-green-lighter);
}

.section-header h2 {
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.section-desc {
  margin-left: auto;
  font-size: 15px;
  color: var(--vp-c-text-3);
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

@media (max-width: 1024px) {
  .knowledge-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .knowledge-grid {
    grid-template-columns: 1fr;
  }
}

.knowledge-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
}

.knowledge-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 20px rgba(63,127,212,0.12);
  transform: translateY(-2px);
}

.knowledge-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.knowledge-card.blue::before { background: var(--vp-c-brand); }
.knowledge-card.green::before { background: var(--vp-c-green); }
.knowledge-card.orange::before { background: var(--vp-c-orange); }
.knowledge-card.purple::before { background: var(--vp-c-purple); }
.knowledge-card.red::before { background: var(--vp-c-red); }
.knowledge-card.teal::before { background: var(--vp-c-teal); }

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.card-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.card-icon.blue { background: var(--vp-c-brand-lighter); }
.card-icon.green { background: var(--vp-c-green-lighter); }
.card-icon.orange { background: #FFF3E0; }
.card-icon.purple { background: #F3E8F9; }
.card-icon.red { background: #FDEAEA; }
.card-icon.teal { background: #E0F7FA; }

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.card-subtitle {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

.card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.card-topic {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-bg-soft);
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-bg-soft);
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.path-section {
  background: var(--vp-c-bg-alt);
  padding: 32px;
  border-radius: 12px;
  margin: 48px 0;
}

.path-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .path-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .path-cards {
    grid-template-columns: 1fr;
  }
}

.path-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
}

.path-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.path-num {
  width: 32px;
  height: 32px;
  background: var(--vp-c-brand-lighter);
  color: var(--vp-c-brand);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  margin: 0 auto 12px;
}

.path-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}

.path-desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}

.recent-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.recent-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--vp-c-bg-soft);
  cursor: pointer;
  transition: background 0.15s;
  text-decoration: none;
  color: inherit;
}

.recent-item:last-child {
  border-bottom: none;
}

.recent-item:hover {
  background: var(--vp-c-bg-alt);
  margin: 0 -12px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
}

.ri-icon {
  width: 32px;
  height: 32px;
  background: var(--vp-c-brand-lighter);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 16px;
}

.ri-content {
  flex: 1;
}

.ri-title {
  font-size: 14px;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.ri-path {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

.ri-date {
  font-size: 12px;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

/* 友情链接 */
.friend-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
}

@media (max-width: 1024px) {
  .friend-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .friend-links {
    grid-template-columns: 1fr;
  }
}

.friend-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.friend-link:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(63,127,212,0.1);
  transform: translateY(-2px);
}

.fl-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.fl-content {
  flex: 1;
  min-width: 0;
}

.fl-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.fl-desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fl-arrow {
  font-size: 18px;
  color: var(--vp-c-text-3);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.friend-link:hover .fl-arrow {
  color: var(--vp-c-brand);
  transform: translateX(4px);
}
</style>
