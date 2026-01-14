<script setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import rawMarkdown from './md/gt.md?raw'
</script>

<template>
  <section class="tutorial-page">
    <h3 class="tutorial-title">GT</h3>
    <MarkdownViewer :source="rawMarkdown" />
  </section>
</template>

<style>
.tutorial-title {
  font-size: 24px;
  margin-bottom: 16px;
  color: #2c3e50;
}

.tutorial-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>