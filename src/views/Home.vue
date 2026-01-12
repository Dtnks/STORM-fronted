<template>
  <div class="document-page">
    <h1>STORM Documentation</h1>
    <p>
      STORM is a 555M-parameter multimodal foundation model that bridges H&amp;E pathology images and spatial
      transcriptomics, unifying morphology and molecular signals. Two-stage self-supervised pretraining equips it
      for cross-modal alignment, reconstruction, and downstream adaptation.
    </p>
    <p>
      The docs summarize the model’s training corpus (650k+ paired tiles), architecture (multi-branch Transformer
      with shared deep layers and cross-attention decoders), and the spatial encodings and masked reconstruction
      strategies used to align diverse tissues, platforms, and resolutions.
    </p>
    <h2>What you’ll find</h2>
    <ul>
      <li>Core positioning: pathology–molecular unification and cross-modal generalization</li>
      <li>Training data &amp; preprocessing: histMol corpus, resolution-specific pipelines</li>
      <li>Architecture: modality-specific encoders, shared Transformer, cross-attention decoders</li>
      <li>
        Key capabilities: tissue/region annotation, in situ gene expression prediction, prognosis &amp; risk
        stratification, pathology–molecular embedding
      </li>
      <li>Highlights: cross-platform pretraining, strong low/weak-label performance, interpretable spatial heatmaps</li>
      <li>
        Typical use cases: tissue QC, subtype inference, survival/relapse risk mapping, batch-effect mitigation,
        biomarker discovery
      </li>
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
