<template>
  <div class="document-page">
    <h1>Welcome to the STORM Docs</h1>
    <p>Browse the left menu to access API guides for STORM.</p>
    <p>
      Key modules covered: HDReader (HD data IO), VisiumReader (Visium spatial IO), pp (preprocessing pipelines),
      and gt (feature extraction & inference utilities).
    </p>
    <p>Use the top button to collapse the menu when you need more reading space.</p>
    <h2>What you’ll find</h2>
    <ul>
      <li>API reference for all functions with parameters and returns clearly listed</li>
      <li>Module overviews to help you pick the right entry point (HDReader, VisiumReader, pp, gt)</li>
      <li>Router-based navigation with collapsible sidebar for quick switching</li>
      <li>Responsive layout suitable for desktop and mobile</li>
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
