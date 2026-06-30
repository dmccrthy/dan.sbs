<template>
  <main class="px-6 md:px-16 py-10 space-y-6">
    <h1 class="text-4xl font-bold mb-8 text-center">My Posts</h1>

    <SearchFilter
      :search-query="searchQuery"
      :active-tags="activeTags"
      :all-tags="allTags"
      :filtered="filtered"
      @update:search-query="searchQuery = $event"
      @toggle-tag="toggleTag"
      @clear-filters="clearFilters"
    />

    <div v-if="filtered.length" class="flex flex-col space-y-6">
      <PageCard v-for="post in filtered" :key="post.id" :post="post" />
    </div>
    <p v-else class="text-center text-font/60 py-12">No posts found.</p>
  </main>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("post", () =>
  queryCollection("posts").all(),
)

const sortedPosts = computed(() =>
  [...toValue(posts)]
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

const {
  searchQuery,
  activeTags,
  allTags,
  filtered,
  toggleTag,
  clearFilters,
} = useSearchFilter(sortedPosts)

usePageMeta("Posts", "Various blog posts I've written over the years.")
</script>

