<script setup>
import { computed } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = defineProps({
  source: {
    type: String,
    required: true
  }
})

marked.setOptions({
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  },
  langPrefix: 'hljs language-',
  gfm: true
})

const html = computed(() => marked.parse(props.source))
</script>

<template>
  <article class="markdown-body" v-html="html" />
</template>

<style>
.markdown-body {
  max-width: 900px;
  line-height: 1.6;
  color: #2c3e50;
}

.markdown-body h1 {
  font-size: 32px;
  margin-bottom: 16px;
  color: #2c3e50;
}

.markdown-body h2 {
  font-size: 22px;
  margin: 20px 0 10px;
  color: #34495e;
}

.markdown-body p {
  margin-bottom: 12px;
}

.markdown-body pre {
  background: #f6f8fa;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 14px;
  overflow-x: auto;
  color: #2c3e50;
  margin-bottom: 18px;
}

.markdown-body code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
}

.markdown-body pre code {
  display: block;
}

.markdown-body .output-text {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 12px;
  white-space: pre-wrap;
  color: #4a4a4a;
  line-height: 1.5;
}
</style>

