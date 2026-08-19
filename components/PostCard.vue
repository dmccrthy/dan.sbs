<template>
  <div
    class="flex flex-col rounded-lg border border-alt overflow-hidden hover:border-highlight/50 transition-colors bg-main"
  >
    <NuxtImg
      v-if="post.image"
      :src="post.image"
      :alt="post.title"
      class="w-full h-48 object-cover shrink-0"
    />

    <div class="p-5 flex flex-col flex-1">
      <p class="text-sm font-semibold text-highlight mb-2">
        {{
          new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        }}
      </p>

      <h3 class="text-xl font-bold mb-2">
        <NuxtLink :to="post.path" class="hover:text-highlight transition-colors">
          {{ post.title }}
        </NuxtLink>
      </h3>

      <p class="text-sm text-font/70 flex-1">
        {{ post.description }}
      </p>

      <NuxtLink
        :to="post.path"
        class="inline-block mt-4 text-sm font-semibold text-highlight hover:underline"
      >
        Read more →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  post: PostsCollectionItem;
}>();
</script>
