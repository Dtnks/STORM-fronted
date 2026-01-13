<script setup>
import { useRoute } from 'vue-router'
</script>

<template>
  <div class="api-layout">
    <header class="api-header">
      <div>
        <h1>API</h1>
      </div>
    </header>

    <section class="api-content">
      <router-view />
    </section>
  </div>
</template>

<style scoped>
.api-layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.api-header h1 {
  font-size: 28px;
  margin-bottom: 6px;
  color: #2c3e50;
}

.api-header p {
  color: #4f4f4f;
}

.api-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.api-tabs a {
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  color: #2c3e50;
  background: #f5f7fb;
  border: 1px solid #e1e4eb;
  transition: all 0.2s ease;
}

.api-tabs a:hover {
  background: #e8eef7;
}

.api-tabs a.active {
  background: #007bff;
  color: #fff;
  border-color: #007bff;
}

.api-content {
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

ul {
  margin-left: 18px;
  color: #4f4f4f;
}

code {
  background: #f6f8fa;
  padding: 2px 6px;
  border-radius: 4px;
}
.doc {
  max-width: 900px;
}
</style>

