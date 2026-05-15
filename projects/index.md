---
title: 项目实战
layout: page
---

<script setup>
import { completedProjects, ongoingProjects } from '../.vitepress/theme/data/projects.js'
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
