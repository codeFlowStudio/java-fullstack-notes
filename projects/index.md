---
title: 项目实战
layout: page
---

<script setup>
import { ref } from 'vue'

const completedProjects = ref([
  {
    title: '电商系统',
    subtitle: 'E-commerce Platform',
    desc: '从零到一构建完整的电商平台，涵盖商品管理、订单系统、支付集成、购物车等核心功能',
    topics: ['Spring Boot', 'MySQL', 'Redis', 'Vue.js'],
    count: '12 篇文章',
    color: 'blue',
    icon: '',
    link: '#'
  },
  {
    title: '秒杀系统',
    subtitle: 'Flash Sale System',
    desc: '高并发秒杀架构设计与实现，包含限流、库存扣减、防刷等核心场景的解决方案',
    topics: ['Spring Cloud', 'Redis', 'RabbitMQ', 'Sentinel'],
    count: '8 篇文章',
    color: 'orange',
    icon: '⚡',
    link: '#'
  },
  {
    title: '权限管理系统',
    subtitle: 'RBAC Permission System',
    desc: '基于 RBAC 模型的权限管理系统，支持菜单权限、按钮权限、数据权限等多维度控制',
    topics: ['Spring Security', 'JWT', 'Vue.js', 'Element Plus'],
    count: '10 篇文章',
    color: 'green',
    icon: '',
    link: '#'
  },
  {
    title: '博客系统',
    subtitle: 'Blog Platform',
    desc: '个人博客系统，支持文章管理、分类标签、评论系统、全文搜索等功能',
    topics: ['Spring Boot', 'Elasticsearch', 'MySQL', 'React'],
    count: '8 篇文章',
    color: 'teal',
    icon: '',
    link: '#'
  }
])

const ongoingProjects = ref([
  {
    title: '工作流引擎',
    subtitle: 'Workflow Engine',
    desc: '基于 Activiti/Flowable 的工作流引擎应用，支持流程设计、审批流转、任务分配等功能',
    topics: ['Flowable', 'Spring Boot', 'MySQL', 'Vue.js'],
    count: '6 篇文章',
    color: 'purple',
    icon: '',
    link: '#'
  },
  {
    title: '即时通讯系统',
    subtitle: 'Instant Messaging',
    desc: '基于 WebSocket 的即时通讯系统，支持单聊、群聊、消息推送、离线消息等功能',
    topics: ['Netty', 'WebSocket', 'Redis', 'Vue.js'],
    count: '5 篇文章',
    color: 'red',
    icon: '💬',
    link: '#'
  }
])
</script>

<div class="projects-page">
  <!-- 已完成项目 -->
  <div class="section-title">
    <span class="section-icon">✅</span>
    <span class="section-text">已完成项目</span>
  </div>

  <div class="knowledge-grid">
    <a 
      v-for="(project, index) in completedProjects" 
      :key="index"
      :href="project.link"
      class="knowledge-card"
      :class="project.color"
    >
      <div class="card-header">
        <div class="card-icon" :class="project.color">{{ project.icon }}</div>
        <div>
          <div class="card-title">{{ project.title }}</div>
          <div class="card-subtitle">{{ project.subtitle }}</div>
        </div>
      </div>
      <div class="card-desc">{{ project.desc }}</div>
      <div class="card-topics">
        <span v-for="(topic, i) in project.topics" :key="i" class="card-topic">
          {{ topic }}
        </span>
      </div>
      <div class="card-footer">
        <span> {{ project.count }}</span>
        <span>✨ 已完成</span>
      </div>
    </a>
  </div>

  <!-- 进行中项目 -->
  <div class="section-title" style="margin-top: 48px;">
    <span class="section-icon">🚧</span>
    <span class="section-text">进行中项目</span>
  </div>

  <div class="knowledge-grid">
    <a 
      v-for="(project, index) in ongoingProjects" 
      :key="index"
      :href="project.link"
      class="knowledge-card"
      :class="project.color"
    >
      <div class="card-header">
        <div class="card-icon" :class="project.color">{{ project.icon }}</div>
        <div>
          <div class="card-title">{{ project.title }}</div>
          <div class="card-subtitle">{{ project.subtitle }}</div>
        </div>
      </div>
      <div class="card-desc">{{ project.desc }}</div>
      <div class="card-topics">
        <span v-for="(topic, i) in project.topics" :key="i" class="card-topic">
          {{ topic }}
        </span>
      </div>
      <div class="card-footer">
        <span> {{ project.count }}</span>
        <span> 进行中</span>
      </div>
    </a>
  </div>
</div>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px;
}

.section-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 24px;
}

.section-icon {
  font-size: 20px;
  line-height: 1;
}

.section-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1;
}
</style>
