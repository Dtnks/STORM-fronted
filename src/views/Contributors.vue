<template>
  <div class="document-page">
    <h1>Contributors</h1>
    <p>Thanks to all contributors who build and maintain STORM.</p>

    <section>
      <h2>Core Contributors</h2>
      <ul class="contributors">
        <li>
          <div class="name">Zongxu Zhang</div>
          <div class="role">Author & Maintainer</div>
          <div class="desc">Leads design, core implementation, and documentation.</div>
        </li>
        <li>
          <div class="name">Project Collaborators</div>
          <div class="role">Engineering & Research</div>
          <div class="desc">Support feature development, data processing, and validation.</div>
        </li>
      </ul>
    </section>

    <section>
      <h2>How to Contribute</h2>
      <ul>
        <li>Report issues or suggestions via the project repository.</li>
        <li>Submit merge requests for docs or code improvements.</li>
        <li>Share usage feedback to help improve APIs and docs.</li>
      </ul>
    </section>
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
  margin: 24px 0 14px;
  color: #34495e;
}

p {
  margin-bottom: 12px;
  color: #555;
}

ul {
  margin-left: 18px;
  margin-bottom: 16px;
  color: #4f4f4f;
}

.contributors {
  list-style: none;
  padding-left: 0;
}

.contributors li {
  padding: 12px 14px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #fafbfc;
}

.name {
  font-weight: 700;
  color: #1f2d3d;
}

.role {
  margin-top: 4px;
  color: #3d5a80;
  font-weight: 600;
}

.desc {
  margin-top: 6px;
  color: #4f4f4f;
}
</style>

