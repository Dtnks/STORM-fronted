<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isMenuOpen = ref(true)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = [
  { path: '/', name: 'Home' },
  { path: '/getting-started', name: 'Getting Started' },
  { path: '/installation', name: 'Installation' },
  { path: '/contributors', name: 'Contributors' },
  {
    path: '/api',
    name: 'API Docs',
    children: [
      { path: '/api/overview', name: 'Overview' },
      { path: '/api/hdreader', name: 'HDReader' },
      { path: '/api/visiumreader', name: 'VisiumReader' },
      { path: '/api/pp', name: 'pp' },
      { path: '/api/gt', name: 'gt' },
    ],
  },
]

const isActive = (path) => route.path === path || route.path.startsWith(`${path}/`)
</script>

<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <header class="header">
      <button class="menu-toggle" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <h1 class="logo">STORM</h1>
    </header>

    <div class="main-content">
      <!-- 左侧菜单 -->
      <aside class="sidebar" :class="{ 'sidebar-closed': !isMenuOpen }">
        <nav class="menu">
          <ul>
            <li v-for="item in menuItems" :key="item.path">
              <router-link :to="item.path" :class="{ active: isActive(item.path) }">
                {{ item.name }}
              </router-link>
              <ul v-if="item.children && isActive(item.path)" class="sub-menu">
                <li v-for="sub in item.children" :key="sub.path">
                  <router-link :to="sub.path" :class="{ active: isActive(sub.path) }">
                    {{ sub.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 右侧内容 -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  color: #666;
}

.logo {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #f5f5f5;
  border-right: 1px solid #eaeaea;
  overflow-y: auto;
  transition: width 0.3s ease;
}

.sidebar.sidebar-closed {
  width: 0;
  overflow: hidden;
}

.menu ul {
  list-style: none;
  padding: 20px 0;
}

.menu li {
  margin-bottom: 5px;
}

.sub-menu {
  list-style: none;
  margin: 4px 0 8px;
  padding-left: 18px;
}

.sub-menu a {
  padding: 8px 16px;
  font-size: 14px;
  background: #f0f2f5;
}

.sub-menu a:hover {
  background-color: #e2e6ed;
}

.menu a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s ease;
}

.menu a:hover {
  background-color: #eaeaea;
}

.menu a.active {
  background-color: #007bff;
  color: #fff;
}

.content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background-color: #fff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    z-index: 100;
  }

  .sidebar.sidebar-closed {
    left: -250px;
    width: 250px;
  }

  .content {
    padding: 20px;
  }
}
</style>
