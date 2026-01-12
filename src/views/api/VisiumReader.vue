<script setup>
</script>

<template>
  <div class="doc">
    <h2>VisiumReader</h2>
    <p>This module provides the <code>VisiumReader</code> class for reading Visium data.</p>
    <p>It reads images, tissue positions, and expression matrices from a folder, handling preprocessing and gene-token mapping.</p>

    <section>
      <h3>Class: VisiumReader</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>read_all(folder_path, method, key, gene_token, medium_token_path=None)</strong></div>
          <div class="fn-desc">Read image, tissue position, and H5 file in sequence; store data in class attributes.</div>
          <div class="fn-param">Param folder_path (str): path to folder containing required files.</div>
          <div class="fn-param">Param method (str): data processing method (e.g., binary/raw/norm/medium).</div>
          <div class="fn-param">Param key (str): key used to set gene token (id or symbol).</div>
          <div class="fn-param">Param gene_token (str): gene token CSV file.</div>
          <div class="fn-param">Param medium_token_path (str|None): optional path to medium token file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_h5(h5_path, method, key, gene_token, medium_token_path=None)</strong></div>
          <div class="fn-desc">Read H5 or MTX; set gene token; process matrix according to method.</div>
          <div class="fn-param">Param h5_path (str): path to H5 or MTX file.</div>
          <div class="fn-param">Param method (str): processing method (binary/raw/norm/medium).</div>
          <div class="fn-param">Param key (any): key used to set gene token.</div>
          <div class="fn-param">Param gene_token (any): gene token.</div>
          <div class="fn-param">Param medium_token_path (str|None): optional medium token path.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_img(raw_img_path)</strong></div>
          <div class="fn-desc">Read an image; convert RGBA to RGB if needed; store in class attribute.</div>
          <div class="fn-param">Param raw_img_path (str): path to raw image file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_tissue_position(raw_tpl_path, json_path)</strong></div>
          <div class="fn-desc">Read tissue position CSV, process columns, set index to barcode, convert dtypes, and read scale JSON.</div>
          <div class="fn-param">Param raw_tpl_path (str): path to tissue position CSV.</div>
          <div class="fn-param">Param json_path (str): path to scale factors JSON.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
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

pre {
  background: #f6f8fa;
  border-radius: 6px;
  padding: 14px;
  overflow-x: auto;
  color: #2c3e50;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.fn-list {
  list-style: none;
  padding-left: 0;
}

.fn {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 12px 14px;
  margin-bottom: 12px;
  background: #fafbfc;
}

.fn-name {
  font-weight: 700;
  color: #1f2d3d;
}

.fn-desc,
.fn-param,
.fn-return {
  margin-top: 6px;
  color: #4f4f4f;
  line-height: 1.5;
}

.fn-param {
  padding: 6px 10px;
  border-left: 3px solid #c7d7ff;
  background: #f7f9ff;
  border-radius: 4px;
}

.fn-return {
  padding: 6px 10px;
  border-left: 3px solid #b8eacb;
  background: #f8fffa;
  border-radius: 4px;
  font-weight: 600;
}

figure {
  background: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 12px;
}

img {
  width: 100%;
  display: block;
  border-radius: 6px;
}

figcaption {
  margin-top: 8px;
  color: #4f4f4f;
  font-size: 14px;
}
</style>

