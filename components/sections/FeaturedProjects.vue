<template>
  <section v-if="sortedProjects.length" class="py-10">
    <h2>featured projects</h2>
    <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="project in sortedProjects"
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
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2 py-0.5 rounded-full text-xs font-medium leading-none border border-alt [&:not(:first-child)]:mt-0"
            >
              {{ tag }}
            </span>
          </div>
          <span class="text-sm font-medium text-highlight group-hover:underline mt-auto">
            View project →
          </span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData("featured-projects", () =>
  queryCollection("projects").all(),
);

const sortedProjects = computed(() =>
  [...toValue(projects)]
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3),
);
</script>
