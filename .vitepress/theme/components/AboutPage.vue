<template>
  <div class="about-page">
    <!-- 页面标题 -->
    <div class="about-hero">
      <h1>关于本站</h1>
      <p class="about-desc">源自实战，专注 Java 全栈技术成长</p>
    </div>

    <!-- 站点介绍 -->
    <section class="about-section">
      <h2>📚 站点介绍</h2>
      <p>
        <strong>Java全栈实战录</strong> 是代码流工作室出品的技术实战平台。内容源自作者多年一线开发经验，涵盖 Java 后端、主流框架、中间件、数据库、分布式架构、前端等核心技术，助你构建完整的全栈知识体系。
      </p>
    </section>

    <!-- 使命与愿景 -->
    <section class="about-section">
      <h2>🎯 使命与愿景</h2>
      <p>我们的使命是：</p>
      <ul class="mission-list">
        <li><strong>实战导向</strong>：所有内容源自真实项目经验，拒绝纸上谈兵</li>
        <li><strong>系统全面</strong>：覆盖 Java 全栈技术栈，构建完整知识体系</li>
        <li><strong>精准简洁</strong>：直击技术要点，帮助你高效学习</li>
        <li><strong>持续更新</strong>：跟随技术发展，保持内容前沿性</li>
      </ul>
    </section>

    <!-- 站点特色 -->
    <section class="about-section">
      <h2>✨ 站点特色</h2>
      
      <div class="features-grid">
        <div class="feature-card">
          <h3>全栈技术栈</h3>
          <p>覆盖完整的技术体系：</p>
          <ul>
            <li>☕ <strong>Java 后端</strong>：基础语法、JVM、并发编程</li>
            <li>🌱 <strong>主流框架</strong>：Spring、Spring Boot、Spring Cloud</li>
            <li>📡 <strong>中间件</strong>：消息队列、缓存、RPC</li>
            <li>💾 <strong>数据库</strong>：MySQL、MongoDB、Elasticsearch</li>
            <li>🏛️ <strong>分布式</strong>：高性能、高可用、海量数据</li>
            <li>💻 <strong>前端框架</strong>：Vue.js、React</li>
            <li>🚀 <strong>项目实战</strong>：真实项目案例</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>优质的内容质量</h3>
          <ul>
            <li>深入源码分析，理解底层原理</li>
            <li>丰富的代码示例，便于实践</li>
            <li>清晰的图表说明，降低理解难度</li>
            <li>实战经验分享，避免常见陷阱</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>良好的学习体验</h3>
          <ul>
            <li>响应式设计，支持多设备访问</li>
            <li>全文搜索功能，快速定位内容</li>
            <li>清晰的知识分类，便于系统学习</li>
            <li>推荐学习路线，指引学习方向</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 作者信息 -->
    <section class="about-section">
      <h2>👨‍💻 作者信息</h2>
      <p>
        我是一名热爱技术的全栈开发者，深耕 Java 生态系统多年。创建这个网站的初衷是：
      </p>
      <ol class="numbered-list">
        <li>整理和沉淀多年实战经验，形成系统化知识体系</li>
        <li>帮助其他开发者少走弯路，快速掌握全栈技术</li>
        <li>与技术社区共同成长，分享一线开发实践</li>
      </ol>
    </section>

    <!-- 联系方式 -->
    <section class="about-section">
      <h2>📧 联系方式</h2>
      <ul class="contact-list">
        <li><strong>GitHub</strong>: <a href="https://github.com" target="_blank">https://github.com</a></li>
        <li><strong>Email</strong>: example@email.com</li>
        <li><strong>微信</strong>: 暂无</li>
      </ul>
    </section>

    <!-- 参与贡献 -->
    <section class="about-section">
      <h2>🤝 参与贡献</h2>
      <p>如果你对本项目感兴趣，欢迎：</p>
      <ol class="numbered-list">
        <li>在 GitHub 上提交 Issue 或 Pull Request</li>
        <li>分享本站内容到你的社交平台</li>
        <li>提供内容建议或错误反馈</li>
      </ol>
    </section>

    <!-- 开源协议 -->
    <section class="about-section">
      <h2>📄 开源协议</h2>
      <p>
        本站内容遵循 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a> 协议。
      </p>
    </section>

    <!-- 提示 -->
    <div class="about-tip">
      💡 <strong>提示</strong>：本站内容仅供学习参考，如有错误或不足之处，欢迎指正。
    </div>
  </div>
</template>

<script setup>
// About Page 组件
</script>

<style scoped>
.about-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 30px;
}

.about-hero {
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--vp-c-divider);
}

.about-hero h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.about-desc {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.about-section {
  margin-bottom: 48px;
}

.about-section h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--vp-c-text-1);
}

.about-section p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
}

.about-section strong {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.about-section a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.about-section a:hover {
  text-decoration: underline;
}

.mission-list,
.contact-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.mission-list li,
.contact-list li {
  padding: 8px 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.numbered-list {
  padding-left: 24px;
  margin: 16px 0;
}

.numbered-list li {
  padding: 6px 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.feature-card p {
  margin-bottom: 12px;
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-card ul li {
  padding: 6px 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.about-section ul {
  list-style: none;
  padding-left: 0;
  margin: 16px 0;
}

.about-section ul li {
  padding: 8px 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  position: relative;
  padding-left: 20px;
}

.about-section ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
  font-weight: bold;
}

.about-tip {
  margin-top: 48px;
  padding: 16px 20px;
  background: var(--vp-c-brand-lighter);
  border-left: 4px solid var(--vp-c-brand);
  border-radius: 6px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.about-tip strong {
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .about-page {
    padding: 32px 20px;
  }

  .about-hero h1 {
    font-size: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
