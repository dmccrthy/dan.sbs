<template>
  <main class="px-6 md:px-16 py-10">
    <h1 class="text-4xl font-bold mb-8 text-center">Colophon</h1>

    <div class="max-w-2xl mx-auto space-y-6">
      <section>
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Framework:</strong> Nuxt 3</li>
          <li><strong>Styling:</strong> Tailwind CSS v4</li>
          <li><strong>Content:</strong> Nuxt Content</li>
          <li><strong>Deployment:</strong> GitHub Pages</li>
          <li><strong>Fonts:</strong> Outfit (body), Lora (headings)</li>
        </ul>
      </section>

      <section>
        <h2>Design</h2>
        <p>
          Minimal, text-focused layout with subtle ambient gradients and highlight accents. Built
          with a focus on readability and performance.
        </p>
      </section>

      <section>
        <h2>Source</h2>
        <p>
          The source code for this site is available on
          <a
            href="https://github.com/dmccrthy/8n1.net"
            target="_blank"
            class="text-highlight hover:underline"
            >GitHub</a
          >.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
usePageMeta("Colophon", "About the technology and design of this site.");
</script>
