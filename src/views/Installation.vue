<template>
  <div class="document-page">
    <h1>Installation</h1>
    <p>You can install the package in several ways.</p>
    <h2>Using npm</h2>
    <pre><code>npm install our-package --save</code></pre>
    <h2>Using yarn</h2>
    <pre><code>yarn add our-package</code></pre>
    <h2>Using CDN</h2>
    <pre><code>&lt;script src="https://unpkg.com/our-package/dist/our-package.min.js"&gt;&lt;/script&gt;</code></pre>
    <h2>Compatibility</h2>
    <p>The library supports the following browsers:</p>
    <ul>
      <li>Chrome (latest)</li>
      <li>Firefox (latest)</li>
      <li>Safari (latest)</li>
      <li>Edge (latest)</li>
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
