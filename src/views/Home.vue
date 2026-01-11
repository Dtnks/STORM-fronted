<template>
  <div class="document-page">
    <h1>欢迎来到文档中心</h1>
    <p>这是一个基于Vue 3的文档界面示例，包含左侧菜单和右侧内容展示区域。</p>
    <p>您可以通过左侧菜单导航到不同的文档页面，或者使用顶部的菜单按钮折叠/展开菜单。</p>
    <h2>功能特性</h2>
    <ul>
      <li>响应式设计，支持桌面和移动设备</li>
      <li>可折叠的左侧菜单</li>
      <li>路由导航</li>
      <li>清晰的文档结构</li>
    </ul>
  </div>
</template>

<style scoped>
.document-page {
  max-width: 800px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #2c3e50;
}

h2 {
  font-size: 24px;
  margin: 30px 0 15px;
  color: #34495e;
}

p {
  margin-bottom: 15px;
  color: #555;
}

ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
  color: #555;
}
</style>
