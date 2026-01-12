<template>
  <div class="doc">
    <h2>gt</h2>
    <p>Feature extraction and inference helpers for RGB, gene expression, and joint embeddings.</p>

    <section>
      <h3>Functions</h3>
      <ul class="fn-list">
        <li class="fn">
          <div class="fn-name"><strong>get_embedding_RGB(config_path, ckpt_path, rgb, res, device='cpu')</strong></div>
          <div class="fn-desc">Extract feature embedding vectors from RGB images.</div>
          <div class="fn-param">Param config_path (str): path to model config file.</div>
          <div class="fn-param">Param ckpt_path (str): path to model checkpoint (.pth).</div>
          <div class="fn-param">Param rgb (torch.Tensor): shape (batchsize, 224, 224, 3).</div>
          <div class="fn-param">Param res (torch.Tensor): resolution parameter.</div>
          <div class="fn-param">Param device (str, optional): compute device.</div>
          <div class="fn-return">Returns: torch.Tensor embeddings.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>get_embedding_all(config_path, ckpt_path, rgb, expr, res, device='cpu')</strong></div>
          <div class="fn-desc">Extract joint embedding vectors from RGB images and expression matrices.</div>
          <div class="fn-param">Param config_path (str): path to model config file.</div>
          <div class="fn-param">Param ckpt_path (str): path to model checkpoint (.pth).</div>
          <div class="fn-param">Param rgb (torch.Tensor): shape (batchsize, 224, 224, 3).</div>
          <div class="fn-param">Param expr (torch.Tensor): shape (batchsize, 56, 56, gene_number).</div>
          <div class="fn-param">Param res (torch.Tensor): resolution parameter.</div>
          <div class="fn-param">Param device (str, optional): compute device.</div>
          <div class="fn-return">Returns: torch.Tensor embeddings.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>get_encoder(config_path, ckpt_path, device='cpu')</strong></div>
          <div class="fn-desc">Load and initialize the STORM encoder model; set to eval mode.</div>
          <div class="fn-param">Param config_path (str): path to model configuration YAML.</div>
          <div class="fn-param">Param ckpt_path (str): path to model checkpoint (.pth).</div>
          <div class="fn-param">Param device (str, optional): compute device.</div>
          <div class="fn-return">Returns: torch.nn.Module encoder.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>get_expr(config_path, ckpt_path, rgb, res, device='cpu')</strong></div>
          <div class="fn-desc">Predict gene expression matrix from RGB images.</div>
          <div class="fn-param">Param config_path (str): path to model config file.</div>
          <div class="fn-param">Param ckpt_path (str): path to model checkpoint (.pth).</div>
          <div class="fn-param">Param rgb (torch.Tensor): shape (batchsize, 224, 224, 3).</div>
          <div class="fn-param">Param res (torch.Tensor): resolution parameter.</div>
          <div class="fn-param">Param device (str, optional): compute device.</div>
          <div class="fn-return">Returns: torch.Tensor expression matrix.</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>get_rgb_and_expr(tif_path, expr_path)</strong></div>
          <div class="fn-desc">Load TIF images and corresponding expression matrices.</div>
          <div class="fn-param">Param tif_path (str): path to TIF image file.</div>
          <div class="fn-param">Param expr_path (str): path to expression matrix (.pt).</div>
          <div class="fn-return">Returns: tuple(torch.Tensor rgb, torch.Tensor expr, torch.Tensor res).</div>
        </li>
        <li class="fn">
          <div class="fn-name"><strong>process_single_sample(mode, input_path, output_path, model, device)</strong></div>
          <div class="fn-desc">Process a single sample to generate embeddings; supports rgb2emb or all2emb.</div>
          <div class="fn-param">Param mode (str): 'rgb2emb' or 'all2emb'.</div>
          <div class="fn-param">Param input_path (str): path to input sample directory.</div>
          <div class="fn-param">Param output_path (str): path to save outputs.</div>
          <div class="fn-param">Param model (torch.nn.Module): initialized STORM model.</div>
          <div class="fn-param">Param device (str): compute device.</div>
          <div class="fn-return">Returns: tuple[bool, str, str] (success, status, error message).</div>
        </li>
      </ul>
    </section>

    <section>
      <h3>Notes</h3>
      <ul>
        <li>Config and checkpoint paths must match; default device is <code>cpu</code>, switch to <code>cuda</code> if needed.</li>
        <li><code>process_single_sample</code> supports modes <code>rgb2emb</code> and <code>all2emb</code>.</li>
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

