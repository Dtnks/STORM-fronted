<script setup>
</script>

<template>
  <div class="doc">
    <h2>pp</h2>
    <p>Preprocessing utilities covering stain matrix calculation, HD/Visium gridding, interpolation, and saving.</p>

    <section>
      <h3>Class: Cal_CMatrix</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>readFile(raw_img_path)</strong></div>
          <div class="fn-desc">Read an image file and store it in the class instance.</div>
          <div class="fn-param">Param raw_img_path (str): path to the raw image file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>get_cmtx(method='vahadane')</strong></div>
          <div class="fn-desc">Calculate stain color matrix.</div>
          <div class="fn-param">Param method (str, optional): “vahadane” or “macenko”.</div>
          <div class="fn-return">Returns: np.ndarray stain color matrix.</div>
        </li>
      </ul>
    </section>

    <section>
      <h3>Class: HDPreprocesser(Reader, prefix, token_path)</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>process_grid(patch_size, dst_res, bin_res=2)</strong></div>
          <div class="fn-desc">Generate image and tissue grid based on tissue position and spot-to-microscope information.</div>
          <div class="fn-param">Param patch_size (int): patch size for grid.</div>
          <div class="fn-param">Param dst_res (int): destination resolution.</div>
          <div class="fn-param">Param bin_res (int, optional): binning resolution (default 2).</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>process_image()</strong></div>
          <div class="fn-desc">Convert grid columns to arrays, calculate pixels from original image, post-process the calculated image.</div>
          <div class="fn-return">Returns: processed image in <code>nwimg</code>.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>process_matrix()</strong></div>
          <div class="fn-desc">Renew AnnData based on tissue grid, set gene token, binarize matrix; free unused data.</div>
          <div class="fn-return">Returns: processed AnnData in <code>adata</code>.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>saveFile(imgrid_path=None, fhe_path=None, h5ad_path=None)</strong></div>
          <div class="fn-desc">Save image grid, processed H&amp;E image, and AnnData if paths provided.</div>
          <div class="fn-param">Param imgrid_path (str|None): path to Parquet grid.</div>
          <div class="fn-param">Param fhe_path (str|None): path to processed H&amp;E image.</div>
          <div class="fn-param">Param h5ad_path (str|None): path to AnnData file.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
      </ul>
    </section>

    <section>
      <h3>Class: VisiumPreprocesser(Reader, patch_size)</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>cal_cor()</strong></div>
          <div class="fn-desc">Find tissue bounding box; ensure dimensions divisible by patch size.</div>
          <div class="fn-return">Returns: tuple(x_min, x_max, y_min, y_max).</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>generate_grid()</strong></div>
          <div class="fn-desc">Create tissue grid mesh using bounds and spacing; store in DataFrame.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>map_tissue()</strong></div>
          <div class="fn-desc">Expand barcode info, join to tissue grid, fill missing barcode values, add spot coordinates.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>expand_barcode()</strong></div>
          <div class="fn-desc">Add center coordinates/number; init arrays; mark barcode and tissue labels; build barcode DataFrame.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>mark_bc_label(row)</strong></div>
          <div class="fn-desc">Assign number to array_forBarcode based on center coordinates.</div>
          <div class="fn-param">Param row (pandas.Series): contains center_x and center_y.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>mark_tissue_grid(row)</strong></div>
          <div class="fn-desc">Assign in_tissue value to tissue_grid by index, adding row if missing.</div>
          <div class="fn-param">Param row (pandas.Series): tissue grid row.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>find_avg_grid()</strong></div>
          <div class="fn-desc">Filter tissue grid for valid barcodes/in-tissue, average gene expression, create AnnData for the average grid.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>insert_grid()</strong></div>
          <div class="fn-desc">Interpolate gene expression for non-average grid points (nearest neighbor) and create AnnData.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>concat_adata()</strong></div>
          <div class="fn-desc">Concatenate average, interpolated, and zero-valued AnnData; align indices to tissue grid.</div>
          <div class="fn-return">Returns: None.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>crop_img()</strong></div>
          <div class="fn-desc">Pad/crop H&amp;E using tissue grid, segment tissue, balance white, compute color features before/after.</div>
          <div class="fn-return">Returns: tuple(raw_he_feature, raw_bg_feature, after_he_feature, after_bg_feature, raw_he, pd_he).</div>
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

.gallery {
  margin-top: 14px;
}

figure {
  background: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 12px;
  max-width: 520px;
}

img {
  width: 100%;
  border-radius: 6px;
  display: block;
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

figcaption {
  margin-top: 8px;
  color: #4f4f4f;
  font-size: 14px;
}
</style>

