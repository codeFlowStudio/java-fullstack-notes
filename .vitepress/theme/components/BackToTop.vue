<template>
  <Transition name="fade">
    <button
      v-if="showButton"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="回到顶部"
    >
      <span class="arrow-up"></span>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const scrollThreshold = 300 // 滚动超过300px时显示

function handleScroll() {
  showButton.value = window.scrollY > scrollThreshold
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(63, 127, 212, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
}

.back-to-top:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 20px rgba(63, 127, 212, 0.4);
}

.back-to-top:active {
  transform: translateY(-2px) scale(1);
}

/* CSS 箭头 */
.arrow-up {
  width: 12px;
  height: 12px;
  border-left: 3px solid white;
  border-top: 3px solid white;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
  margin-top: 4px;
}

.back-to-top:hover .arrow-up {
  transform: rotate(45deg) translateY(-2px);
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
}
</style>
