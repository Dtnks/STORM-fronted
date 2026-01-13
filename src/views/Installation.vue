<template>
  <div class="document-page">
    <h1>Installation</h1>
    <p>STORM is a Python package for pathology–spatial transcriptomics modeling. Choose one of the methods below.</p>

    <h2>Prerequisites</h2>
    <ul>
      <li>Python 3.9 or newer</li>
      <li>pip ≥ 21 or conda (optional)</li>
      <li>Recommended: virtual environment (venv/conda)</li>
    </ul>

    <h2>Install from PyPI</h2>
    <pre><code>pip install storm-foundation</code></pre>

    <h2>Install from source (local clone)</h2>
    <pre><code>git clone https://github.com/your-org/storm.git
cd storm
pip install -e .</code></pre>

    <h2>GPU/Inference extras (optional)</h2>
    <pre><code># with CUDA-enabled PyTorch (example)
pip install torch --extra-index-url https://download.pytorch.org/whl/cu121
pip install storm-foundation[inference]</code></pre>

    <h2>Verify</h2>
    <p>修改文案测试</p>
    <p>Verify the installation by running the following command:</p>
    <pre><code>python -c "import storm; print(storm.__version__)"</code></pre>
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
