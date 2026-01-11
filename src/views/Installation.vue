<template>
  <div class="document-page">
    <h1>安装</h1>
    <p>您可以通过多种方式安装我们的产品。</p>
    <h2>使用 npm</h2>
    <pre><code>npm install our-package --save</code></pre>
    <h2>使用 yarn</h2>
    <pre><code>yarn add our-package</code></pre>
    <h2>使用 CDN</h2>
    <pre><code>&lt;script src="https://unpkg.com/our-package/dist/our-package.min.js"&gt;&lt;/script&gt;</code></pre>
    <h2>兼容性</h2>
    <p>我们的产品支持以下浏览器：</p>
    <ul>
      <li>Chrome (最新版本)</li>
      <li>Firefox (最新版本)</li>
      <li>Safari (最新版本)</li>
      <li>Edge (最新版本)</li>
    </ul>
  </div>
</template>

<style scoped>
/* 样式与其他页面类似 */
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
