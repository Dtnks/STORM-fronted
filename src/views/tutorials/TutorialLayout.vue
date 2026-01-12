<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { path: '/tutorials/visium', label: 'Visium' },
]

const isActive = (path) => route.path.startsWith(path)
</script>

<template>
  <div class="tutorials-layout">
    <header class="header">
      <div>
        <h1>Tutorials</h1>
        <p>Step-by-step snippets to help you run STORM workflows quickly.</p>
      </div>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.tutorials-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header h1 {
  font-size: 28px;
  margin-bottom: 6px;
  color: #2c3e50;
}

.header p {
  color: #4f4f4f;
}

.tabs {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tabs a {
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  color: #2c3e50;
  background: #f5f7fb;
  border: 1px solid #e1e4eb;
  transition: all 0.2s ease;
}

.tabs a:hover {
  background: #e8eef7;
}

.tabs a.active {
  background: #007bff;
  color: #fff;
  border-color: #007bff;
}

.content {
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 24px;
}

h2 {
  margin: 12px 0 8px;
  color: #2c3e50;
}

p {
  color: #4f4f4f;
  margin-bottom: 8px;
}

pre {
  background: #f6f8fa;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 14px;
  overflow-x: auto;
  color: #2c3e50;
  margin-bottom: 18px;
}
</style>

