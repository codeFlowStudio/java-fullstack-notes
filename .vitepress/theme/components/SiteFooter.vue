<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <p class="copyright">© {{ currentYear }} Java全栈实战录 | Code Flow Studio. All rights reserved.</p>
      </div>
      
      <div class="footer-section">
        <div class="footer-links">
          <a href="https://beian.miit.gov.cn/" target="_blank" class="footer-link">
            京ICP备12345678号-1
          </a>
          <span class="divider">|</span>
          <a href="http://www.beian.gov.cn/" target="_blank" class="footer-link">
            京公网安备 11010502034567号
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <p class="footer-desc">
          本站使用 <a href="https://vitepress.dev/" target="_blank" class="footer-link">VitePress</a> 构建
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 32px 30px;
  margin-top: 60px;
  position: relative;
  z-index: 10;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.footer-section {
  text-align: center;
}

.copyright {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.divider {
  color: var(--vp-c-text-3);
}

.footer-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--vp-c-brand);
}

.footer-desc {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin: 0;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 24px 20px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 8px;
  }
  
  .divider {
    display: none;
  }
}
</style>
