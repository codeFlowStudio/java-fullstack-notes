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
        <strong>Java全栈实战录</strong> 是代码流工作室出品的技术实战平台。内容源自作者多年一线开发经验，涵盖 Java 后端、主流框架、中间件、数据库、分布式架构等核心技术，助你构建完整的全栈知识体系。
      </p>
      <p>
        除了传统的 Java 全栈知识沉淀，本站还有一个重点方向——记录 <strong class="about-ai">AI Coding 在真实项目中的实践</strong>：从 AI IDE 选型、Prompt 工程，到 Custom Agent / Skill / MCP 的工程化落地，再到 Spring AI、LangChain4j、RAG 在 Java 后端的真实集成经验。
      </p>
    </section>

    <!-- 使命与愿景 -->
    <section class="about-section">
      <h2>🎯 使命与愿景</h2>
      <p>我们的使命是：</p>
      <ul class="mission-list">
        <li><strong>实战导向</strong>：所有内容源自真实项目经验，拒绝纸上谈兵</li>
        <li><strong>系统全面</strong>：覆盖 Java 全栈技术栈，构建完整知识体系</li>
        <li><strong>AI 优先</strong>：将 AI Coding 作为一线开发者的新基本功认真对待</li>
        <li><strong>精准简洁</strong>：直击技术要点，帮助你高效学习</li>
        <li><strong>持续更新</strong>：跟随技术发展，保持内容前沿性</li>
      </ul>
    </section>

    <!-- 站点特色 -->
    <section class="about-section">
      <h2>✨ 站点特色</h2>
      
      <div class="features-grid">
        <div class="feature-card">
          <h3>全栈技术体系</h3>
          <p>覆盖 {{ stats.totalModules }} 大知识模块、{{ stats.totalArticles }} 篇系统化文章、{{ stats.totalProjects }} 个实战项目：</p>
          <ul>
            <li>☕ <strong>Java</strong>：基础语法 / 集合容器 / 并发编程 / JVM</li>
            <li>🌱 <strong>框架｜中间件</strong>：Spring 全家桶 / MyBatis / MQ / RPC / Netty</li>
            <li>💾 <strong>数据库</strong>：MySQL / Redis / ElasticSearch / MongoDB</li>
            <li>🧮 <strong>数据结构｜算法</strong>：数据结构与算法技巧</li>
            <li>🏛️ <strong>架构｜设计</strong>：分布式 / 高可用 / DDD / 设计模式</li>
            <li>🖥️ <strong>计算机基础</strong>：网络 / 操作系统 / 网络编程 / Linux</li>
            <li>🐳 <strong>工程｜部署</strong>：Docker / K8s / CI/CD / 监控体系</li>
            <li>🎨 <strong>前端</strong>：Vue 3 / React / TypeScript / Vite / 微前端</li>
            <li>🚀 <strong>场景解决方案</strong>：交易场景 / 数据场景实战</li>
            <li>🤖 <strong>AI Coding</strong>：AI IDE / Agent / Skill / MCP / Spring AI / RAG</li>
            <li>🛠️ <strong>工具｜经验</strong>：工具链与开发方法论</li>
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

    <!-- AI Coding 重点说明 -->
    <section class="about-section ai-section">
      <div class="ai-tag-pill">✨ 本站重点</div>
      <h2>🤖 AI Coding 实践</h2>
      <p>
        AI 已经从「生成代码片段的玩具」变成了真实开发流程中不可或缺的协作者。本站把 <strong>AI Coding</strong> 作为一条独立主线认真维护，目标是回答这些<strong>一线开发者真正会遇到的问题</strong>：
      </p>
      <ul class="ai-questions">
        <li><strong>工具选型</strong>：Qoder / Cursor / Copilot / Claude Code 怎么选？分别适合什么场景？</li>
        <li><strong>上下文管理</strong>：长项目、多模块、跨仓库时，如何让 AI 理解你的真实代码？</li>
        <li><strong>工程化协作</strong>：如何把临时 Prompt 沉淀为可复用的 Custom Agent、Skill、Rule？MCP 协议如何扩展工具能力？</li>
        <li><strong>Java + LLM 落地</strong>：Spring AI、LangChain4j、RAG、Function Calling 在企业项目里怎么用？向量库如何选？</li>
        <li><strong>方法论</strong>：Vibe Coding 怎么不变成「Vibe Bug」？AI 协作下的 Code Review、DDD、架构演进会发生什么变化？</li>
      </ul>
      <p class="ai-callout">
        这里记录的不是 Demo，而是<strong>真实项目中踩过的坑与沉淀下来的实践</strong>。如果你也在用 AI 写真实的产品代码，希望这里有用。
      </p>
      <a :href="withBase('/ai-coding/tools/ide-comparison')" class="ai-entry">进入 AI Coding 模块 →</a>
    </section>

    <!-- 作者信息 -->
    <section class="about-section">
      <h2>👨‍💻 作者信息</h2>
      <p>
        我是一名热爱技术的全栈开发者，深耕 Java 生态系统多年，同时也在持续探索 <strong>AI 辅助开发</strong> 在团队和个人工作流中的真正落地方式。创建这个网站的初衷是：
      </p>
      <ol class="numbered-list">
        <li>整理和沉淀多年实战经验，形成系统化知识体系</li>
        <li>把 AI Coding 的探索过程公开记录，少走重复的弯路</li>
        <li>帮助其他开发者少走弯路，快速掌握全栈技术</li>
        <li>与技术社区共同成长，分享一线开发实践</li>
      </ol>
    </section>

    <!-- 联系方式 -->
    <section class="about-section">
      <h2>📧 联系方式</h2>
      <ul class="contact-list">
        <li><strong>GitHub</strong>: <a href="https://github.com/codeflowstudio" target="_blank">codeflowstudio</a></li>
        <li><strong>Email</strong>: 18270692119@163.com</li>
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
        <li>如果你也在做 AI Coding 相关实践，非常欢迎交流</li>
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
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { allProjects } from '../data/projects.js'

const { theme } = useData()

// 与 HomePage 保持一致的统计逻辑
const sidebarKeys = ['/java/', '/framework/', '/database/', '/algorithm/', '/architecture/', '/cs/', '/devops/', '/frontend/', '/scenarios/', '/ai-coding/', '/tools/']

const stats = computed(() => {
  const sidebar = theme.value.sidebar || {}
  let totalArticles = 0
  let totalGroups = 0
  for (const key of sidebarKeys) {
    const groups = sidebar[key] || []
    totalGroups += groups.length
    for (const g of groups) {
      totalArticles += (g.items?.length || 0)
    }
  }
  return {
    totalArticles,
    totalModules: sidebarKeys.length,
    totalGroups,
    totalProjects: allProjects.length
  }
})
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

/* AI Coding 亮点区块 */
.about-ai {
  color: var(--vp-c-teal, #009688);
  font-weight: 700;
}

.ai-section {
  position: relative;
  padding: 28px 28px 24px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--vp-c-brand-lighter) 0%, var(--vp-c-green-lighter) 100%);
  border: 1px solid var(--vp-c-divider);
}

.ai-tag-pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand);
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.ai-questions {
  list-style: none;
  padding-left: 0 !important;
  margin: 16px 0;
}

.ai-questions li {
  padding: 10px 0 10px 20px !important;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  position: relative;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.ai-questions li:last-child {
  border-bottom: none;
}

.ai-questions li::before {
  content: '◆' !important;
  color: var(--vp-c-brand) !important;
}

.ai-callout {
  padding: 14px 16px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border-left: 3px solid var(--vp-c-brand);
  margin-top: 16px !important;
  font-size: 14px !important;
}

.ai-entry {
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background: var(--vp-c-brand);
  color: #fff !important;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.2s;
}

.ai-entry:hover {
  transform: translateX(3px);
  box-shadow: 0 4px 12px rgba(63,127,212,0.25);
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
