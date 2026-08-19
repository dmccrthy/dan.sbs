<template>
  <section class="py-10">
    <p class="text-sm text-font/60">
      A random sample from the archives — refresh to shuffle.
    </p>

    <div class="flex items-end justify-between mt-8">
      <h2>projects</h2>
      <NuxtLink to="/projects" class="text-sm font-medium text-highlight hover:underline"
        >view all</NuxtLink
      >
    </div>
    <div class="mt-8 grid gap-6 sm:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project.id"
        :href="project.link || '#'"
        :target="project.link ? '_blank' : undefined"
        :rel="project.link ? 'noopener noreferrer' : undefined"
        class="rounded-lg border border-alt hover:border-highlight/50 transition-colors flex flex-col overflow-hidden group bg-main"
      >
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="w-full h-36 object-cover"
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

    <div class="flex items-end justify-between mt-12">
      <h2>posts</h2>
      <NuxtLink to="/posts" class="text-sm font-medium text-highlight hover:underline"
        >view all</NuxtLink
      >
    </div>
    <div class="mt-8 grid gap-6 sm:grid-cols-2">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projectsData } = await useAsyncData("home-projects", () =>
  queryCollection("projects").all(),
);

const { data: postsData } = await useAsyncData("home-posts", () =>
  queryCollection("posts").all(),
);

function byDateDesc(a: { date: string }, b: { date: string }): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

const newestProjects = computed(() =>
  [...toValue(projectsData)].sort(byDateDesc).slice(0, 2),
);

const newestPosts = computed(() => [...toValue(postsData)].sort(byDateDesc).slice(0, 2));

const mounted = ref(false);
const selectedProjects = ref<ProjectsCollectionItem[]>([]);
const selectedPosts = ref<PostsCollectionItem[]>([]);

const projects = computed(() =>
  mounted.value ? selectedProjects.value : newestProjects.value,
);
const posts = computed(() => (mounted.value ? selectedPosts.value : newestPosts.value));

function pickRandom<T>(items: T[], count: number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

onMounted(() => {
  selectedProjects.value = pickRandom(toValue(projectsData), 2);
  selectedPosts.value = pickRandom(toValue(postsData), 2);
  mounted.value = true;
});
</script>