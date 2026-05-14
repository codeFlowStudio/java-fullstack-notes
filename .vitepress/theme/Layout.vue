<script setup>
import { useData } from 'vitepress'
import CustomLayout from './CustomLayout.vue'

const { theme } = useData()
</script>

<template>
  <CustomLayout />
</template>
