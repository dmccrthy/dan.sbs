<template>
  <section class="py-10">
    <h2>experience</h2>
    <div class="relative mt-8">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-highlight/30" />

      <div class="space-y-8">
        <div v-for="(entry, index) in sortedExperience" :key="index" class="relative pl-12">
          <div
            class="absolute left-2.5 top-1.5 size-3 rounded-full bg-highlight ring-4 ring-main"
          />

          <div
            class="rounded-lg border border-alt p-5 hover:border-highlight/50 transition-colors bg-main"
          >
            <div class="flex flex-row items-center gap-2 mb-3">
              <NuxtImg
                v-if="entry.image"
                :src="entry.image"
                :alt="entry.company"
                class="size-6 rounded object-contain bg-main flex-shrink-0"
              />
              <h3 class="text-lg font-bold truncate whitespace-nowrap leading-5 m-0">
                {{ entry.title }} @ {{ entry.company }}
              </h3>
              <div
                class="text-sm font-semibold text-highlight whitespace-nowrap shrink-0 ml-auto leading-5"
              >
                {{ formatDate(entry.startDate) }}
                –
                {{ entry.endDate ? formatDate(entry.endDate) : "Present" }}
              </div>
            </div>

            <p class="text-base leading-relaxed">
              {{ entry.description }}
            </p>

            <div v-if="entry.tags?.length" class="flex flex-wrap gap-2 mt-3">
              <span
                v-for="tag in entry.tags"
                :key="tag"
                class="px-2.5 py-0.5 rounded-full text-xs font-medium leading-none border border-alt [&:not(:first-child)]:mt-0"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: experience } = await useAsyncData("experience", () =>
  queryCollection("experience").all(),
);

const sortedExperience = computed(() =>
  [...toValue(experience)]
    .slice()
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()),
);

function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
</script>
