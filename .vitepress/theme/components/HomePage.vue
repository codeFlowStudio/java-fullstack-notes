<script setup>
import { ref } from 'vue'

const knowledgeCards = ref([
  {
    title: 'Java 基础',
    subtitle: 'Java Core Fundamentals',
    desc: '语言基础、面向对象、集合框架、IO/NIO、异常处理、泛型与注解等核心知识',
    topics: ['面向对象', '集合框架', 'IO 模型', '泛型', '注解'],
    count: '32 篇',
    updated: '3 天前更新',
    color: 'blue',
    icon: '☕',
    link: '/java-core/'
  },
  {
    title: 'JVM 虚拟机',
    subtitle: 'JVM Internals & Tuning',
    desc: '类加载机制、内存模型、垃圾回收算法与调优、字节码与执行引擎深入解析',
    topics: ['类加载', '内存模型', 'GC 调优', 'JIT'],
    count: '18 篇',
    updated: '1 周前更新',
    color: 'green',
    icon: '🔧',
    link: '/java-core/jvm-classloader'
  },
  {
    title: '并发编程',
    subtitle: 'Concurrency & Multithreading',
    desc: '线程基础、锁机制、JUC 并发工具包、线程池原理、并发设计模式与实战',
    topics: ['线程池', '锁机制', 'JUC', 'AQS', 'CAS'],
    count: '24 篇',
    updated: '5 天前更新',
    color: 'orange',
    icon: '⚡',
    link: '/java-core/thread-basics'
  },
  {
    title: 'Spring 生态',
    subtitle: 'Spring / Boot / Cloud',
    desc: 'Spring Core、Spring Boot 自动装配、Spring Cloud 微服务全家桶深度解析',
    topics: ['IoC/AOP', 'Boot', 'Cloud', 'Security'],
    count: '28 篇',
    updated: '2 天前更新',
    color: 'green',
    icon: '🌱',
    link: '/framework/spring-core'
  },
  {
    title: '数据库',
    subtitle: 'MySQL / Redis / MongoDB',
    desc: 'MySQL 索引与调优、事务与锁、Redis 数据结构与应用、分库分表方案',
    topics: ['MySQL', 'Redis', '索引优化', '分库分表'],
    count: '22 篇',
    updated: '1 周前更新',
    color: 'purple',
    icon: '💾',
    link: '/database/mysql-index'
  },
  {
    title: '中间件',
    subtitle: 'MQ / RPC / Gateway',
    desc: '消息队列原理（Kafka/RocketMQ）、RPC 框架、API 网关、服务注册与发现',
    topics: ['Kafka', 'RocketMQ', 'Dubbo', 'Nacos'],
    count: '16 篇',
    updated: '4 天前更新',
    color: 'red',
    icon: '📡',
    link: '/architecture/'
  },
  {
    title: '架构设计',
    subtitle: 'System Design & Patterns',
    desc: '设计模式、DDD 领域驱动、微服务架构拆分策略、分布式系统设计要点',
    topics: ['设计模式', 'DDD', '微服务', '高可用'],
    count: '20 篇',
    updated: '6 天前更新',
    color: 'blue',
    icon: '🏛️',
    link: '/architecture/design-patterns'
  },
  {
    title: 'DevOps',
    subtitle: 'Docker / K8s / CI/CD',
    desc: '容器化部署、Kubernetes 编排、Jenkins 流水线、日志监控告警体系搭建',
    topics: ['Docker', 'K8s', 'Jenkins', 'Prometheus'],
    count: '14 篇',
    updated: '3 天前更新',
    color: 'teal',
    icon: '🐳',
    link: '/devops/docker'
  },
  {
    title: '项目实战',
    subtitle: 'Real-world Projects',
    desc: '电商系统、秒杀架构、权限管理、工作流引擎等完整项目从零到部署',
    topics: ['电商', '秒杀', 'RBAC', '工作流'],
    count: '12 篇',
    updated: '1 周前更新',
    color: 'orange',
    icon: '🚀',
    link: '/projects/'
  }
])

const learningPaths = ref([
  { num: 1, title: 'Java 基础', desc: '语言特性、OOP、集合、IO', link: '/java-core/' },
  { num: 2, title: 'JVM & 并发', desc: '内存模型、GC、锁、线程池', link: '/java-core/jvm-memory' },
  { num: 3, title: 'Spring 全家桶', desc: 'IoC、AOP、Boot、Cloud', link: '/framework/spring-core' },
  { num: 4, title: '架构 & 实战', desc: '分布式、微服务、项目落地', link: '/architecture/' }
])

const recentArticles = ref([
  {
    title: 'Spring Boot 3.x 自动装配原理深度解析',
    path: '框架 / Spring Boot',
    date: '2026-05-12',
    link: '/framework/spring-boot-autoconfigure'
  },
  {
    title: 'MySQL 索引失效的 10 种常见场景与解决方案',
    path: '数据库 / MySQL',
    date: '2026-05-11',
    link: '/database/mysql-index'
  },
  {
    title: 'JUC 并发工具包源码分析 - CountDownLatch',
    path: 'Java 基础 / 并发编程',
    date: '2026-05-10',
    link: '/java-core/thread-basics'
  },
  {
    title: 'Kubernetes Pod 调度策略全解析',
    path: 'DevOps / Kubernetes',
    date: '2026-05-09',
    link: '/devops/kubernetes'
  },
  {
    title: 'Redis 分布式锁的正确实现方式（Redisson）',
    path: '数据库 / Redis',
    date: '2026-05-08',
    link: '/database/redis-data-structure'
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
            <div class="num">200+</div>
            <div class="label">篇文章</div>
          </div>
          <div class="hero-stat">
            <div class="num">15</div>
            <div class="label">大知识模块</div>
          </div>
          <div class="hero-stat">
            <div class="num">50+</div>
            <div class="label">知识图谱</div>
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
          :href="card.link"
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
            :href="path.link"
            class="path-card"
          >
            <div class="path-num">{{ path.num }}</div>
            <div class="path-title">{{ path.title }}</div>
            <div class="path-desc">{{ path.desc }}</div>
          </a>
        </div>
      </div>

      <div class="section-header">
        <div class="section-icon">📝</div>
        <h2>最近更新</h2>
      </div>

      <div class="recent-list">
        <a 
          v-for="(article, index) in recentArticles" 
          :key="index"
          :href="article.link"
          class="recent-item"
        >
          <div class="ri-icon">📄</div>
          <div class="ri-content">
            <div class="ri-title">{{ article.title }}</div>
            <div class="ri-path">{{ article.path }}</div>
          </div>
          <span class="ri-date">{{ article.date }}</span>
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
  gap: 60px;
  margin-top: 36px;
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
