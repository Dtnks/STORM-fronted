<template>
  <div class="doc">
    <h2>HDReader</h2>
    <p>This module provides the <code>HDReader</code> class for reading HD data.</p>
    <p>It reads HD images, tissue positions, slice features, JSON files, and H5 matrices, caching them on the class for later steps.</p>

    <section>
      <h3>Class: HDReader</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>read_all(image_path, tpl_path, slice_path, sf_path, raw_matrix_path)</strong></div>
          <div class="fn-desc">Read image, tissue position, slice features, JSON, and H5 sequentially into class attributes.</div>
          <div class="fn-param">Param image_path (str): path to image file.</div>
          <div class="fn-param">Param tpl_path (str): path to tissue position file.</div>
          <div class="fn-param">Param slice_path (str): path to slice feature file.</div>
          <div class="fn-param">Param sf_path (str): path to JSON feature file.</div>
          <div class="fn-param">Param raw_matrix_path (str): path to H5 matrix file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_feature(slice_path)</strong></div>
          <div class="fn-desc">Read slice feature information and store in a class attribute.</div>
          <div class="fn-param">Param slice_path (str): path to slice feature file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_h5(raw_matrix_path)</strong></div>
          <div class="fn-desc">Read raw matrix H5 using scanpy and make gene names unique.</div>
          <div class="fn-param">Param raw_matrix_path (str): path to H5 file containing raw matrix data.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_image(image_path)</strong></div>
          <div class="fn-desc">Read an image file and store it in a class attribute.</div>
          <div class="fn-param">Param image_path (str): path to the image file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_json(sf_path)</strong></div>
          <div class="fn-desc">Read JSON feature data and store it in a class attribute.</div>
          <div class="fn-param">Param sf_path (str): path to the JSON file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>read_tpl(tpl_path)</strong></div>
          <div class="fn-desc">Read tissue position information and store it in a class attribute.</div>
          <div class="fn-param">Param tpl_path (str): path to the tissue position file.</div>
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
</style>

