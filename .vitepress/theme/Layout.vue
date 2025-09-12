<template>
  <DefaultTheme.Layout>
    <!-- 只在文档页底部插入联系方式 -->
    <template #doc-footer-before>
      <ContactBox />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ContactBox from '../../components/ContactBox.vue'
</script>