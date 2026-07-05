<template>
  <div>
    <PageHeader />
    <main class="flex flex-col items-center justify-center min-h-[65vh] px-6 text-center">
      <h1 class="text-6xl font-bold mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-xl mb-8">
        {{ error.statusCode === 404 ? "Page not found." : "Something went wrong." }}
      </p>
      <p v-if="error.statusCode !== 404" class="text-font/70 mb-8 max-w-md">
        {{ error.message }}
      </p>
      <NuxtLink
        to="/"
        class="px-6 py-3 rounded-lg border border-alt hover:border-highlight transition-colors font-medium"
      >
        Go home
      </NuxtLink>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const title = error.statusCode === 404 ? "Page not found" : "Error";

useSeoMeta({
  title: `${title} — 8n1.net`,
});
</script>
