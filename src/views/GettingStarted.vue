<template>
  <div class="document-page">
    <h1>Getting Started</h1>
    <p>This guide helps you onboard quickly.</p>
    <h2>Prerequisites</h2>
    <ul>
      <li>Node.js 14.0 or above</li>
      <li>npm or yarn package manager</li>
    </ul>
    <h2>Step 1: Install</h2>
    <pre><code>npm install our-package</code></pre>
    <h2>Step 2: Import</h2>
    <pre><code>import { OurComponent } from 'our-package'

// In your Vue component
components: {
  OurComponent
}</code></pre>
    <h2>Step 3: Use</h2>
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
