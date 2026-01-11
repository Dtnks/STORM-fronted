<template>
  <div class="document-page">
    <h1>快速开始</h1>
    <p>本指南将帮助您快速上手使用我们的产品。</p>
    <h2>前置条件</h2>
    <ul>
      <li>Node.js 14.0 或更高版本</li>
      <li>npm 或 yarn 包管理器</li>
    </ul>
    <h2>第一步：安装</h2>
    <pre><code>npm install our-package</code></pre>
    <h2>第二步：引入</h2>
    <pre><code>import { OurComponent } from 'our-package'

// 在Vue组件中使用
components: {
  OurComponent
}</code></pre>
    <h2>第三步：使用</h2>
    <pre><code>&lt;our-component :prop="value" @event="handler" /&gt;</code></pre>
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

pre {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 20px;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
}
</style>
