<template>
  <main class="px-6 md:px-16 py-10 space-y-6">
    <h1 class="text-4xl font-bold mb-8 text-center">Projects</h1>

    <SearchFilter
      :search-query="searchQuery"
      :active-tags="activeTags"
      :all-tags="allTags"
      :filtered="filtered"
      @update:search-query="searchQuery = $event"
      @toggle-tag="toggleTag"
      @clear-filters="clearFilters"
    />

    <div v-if="filtered.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="project in filtered"
        :key="project.id"
        :href="project.link || '#'"
        :target="project.link ? '_blank' : undefined"
        :rel="project.link ? 'noopener noreferrer' : undefined"
        class="rounded-lg border border-alt hover:border-highlight/50 transition-colors flex flex-col overflow-hidden group"
      >
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="w-full h-40 object-cover"
        />
        <div class="p-5 flex flex-col flex-1">
          <h3 class="text-lg font-semibold mb-2 group-hover:text-highlight transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-sm text-font/70 flex-grow mb-4">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 rounded-full text-xs font-medium leading-none border border-alt [&:not(:first-child)]:mt-0"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </a>
    </div>
    <p v-else class="text-center text-font/60 py-12">No projects found.</p>
  </main>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("projects", () => queryCollection("projects").all());

const sortedProjects = computed(() =>
  [...toValue(projects)]
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
);

const { searchQuery, activeTags, allTags, filtered, toggleTag, clearFilters } =
  useSearchFilter(sortedProjects);

usePageMeta("Projects", "Various projects I've worked on over the years.");
</script>
