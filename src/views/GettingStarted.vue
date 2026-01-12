<template>
  <div class="document-page">
    <h1>Getting Started</h1>
    <p>Use this quickstart to set up a Python environment and run STORM.</p>

    <h2>Prerequisites</h2>
    <ul>
      <li>Python 3.9 or newer</li>
      <li>pip ≥ 21 (or conda)</li>
      <li>Recommended: GPU with CUDA for inference acceleration</li>
    </ul>

    <h2>Step 1: Create & activate environment</h2>
    <pre><code>python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate</code></pre>

    <h2>Step 2: Install STORM</h2>
    <pre><code>pip install --upgrade pip
pip install storm-foundation</code></pre>

    <h2>Step 3: Minimal usage</h2>
    <pre><code>import storm
from storm import StormModel

model = StormModel.from_pretrained("storm-base")
# Embed a pathology tile and align with spatial transcriptomics context
embedding = model.embed_image("path/to/slide_tile.png")

# Optionally predict in situ gene expression (API depends on release)
# expression = model.predict_expression("path/to/slide_tile.png")</code></pre>

    <h2>Next steps</h2>
    <ul>
      <li>Check dataset requirements: paired H&amp;E tiles and spatial coordinates.</li>
      <li>Review model cards for available checkpoints (e.g., storm-base).</li>
      <li>See Tutorials for Visium and custom data preprocessing.</li>
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
