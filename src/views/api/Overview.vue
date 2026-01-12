<template>
  <div class="doc">
    <h2>Overview</h2>
    <p>This page distills the original Sphinx docs into STORM API modules. Use the tabs to browse detailed pages and examples.</p>

    <section>
      <h3>Modules</h3>
      <ul>
        <li>
          <strong>HDReader</strong>: Reader utilities for high-definition (HD) data—images, tissue positions, slice features, and H5 I/O.
        </li>
        <li>
          <strong>VisiumReader</strong>: Visium spatial omics reader with image, tissue position, and expression matrix examples.
        </li>
        <li>
          <strong>pp</strong>: Preprocessing utilities—stain matrix, HD/Visium pipelines, and image/matrix gridding.
        </li>
        <li>
          <strong>gt</strong>: Inference and feature extraction helpers for RGB, expression, and joint embeddings.
        </li>
      </ul>
    </section>

    <section>
      <h3>Notes</h3>
      <ul>
        <li>Each subpage keeps method arguments, return info, and code snippets.</li>
        <li>Example images and flow diagrams now live in <code>src/assets/api</code> and are embedded inline.</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.doc h3 {
  margin: 18px 0 10px;
  color: #2c3e50;
}

.doc ul {
  margin-left: 18px;
  color: #4f4f4f;
}
</style>

