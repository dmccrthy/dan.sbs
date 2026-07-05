<template>
  <div class="space-y-4">
    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div class="relative flex-1 w-full">
        <Icon
          name="lucide:search"
          mode="svg"
          class="absolute left-3 top-1/2 -translate-y-1/2 size-5"
        />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="w-full pl-10 pr-4 py-2 rounded-lg border border-alt bg-main text-font focus:outline-none focus:border-highlight transition-colors"
        />
      </div>
      <button
        v-if="searchQuery || activeTags.length"
        class="text-sm px-3 py-2 rounded-lg border border-alt hover:border-highlight transition-colors cursor-pointer"
        @click="clearFilters"
      >
        Clear filters
      </button>
    </div>

    <div v-if="allTags.length" class="flex flex-wrap gap-2">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="px-3 py-1 rounded-full text-sm font-medium border transition-colors cursor-pointer"
        :class="
          activeTags.includes(tag)
            ? 'bg-highlight text-white border-highlight'
            : 'border-alt hover:border-highlight'
        "
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <p class="text-sm text-font/60">
      {{ filtered.length }} result{{ filtered.length === 1 ? "" : "s" }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  searchQuery: string;
  activeTags: string[];
  allTags: string[];
  filtered: unknown[];
}>();

const emit = defineEmits<{
  "update:searchQuery": [value: string];
  "update:activeTags": [value: string[]];
  clearFilters: [];
  toggleTag: [tag: string];
}>();

function toggleTag(tag: string) {
  emit("toggleTag", tag);
}

function clearFilters() {
  emit("clearFilters");
}

const searchQuery = computed({
  get: () => props.searchQuery,
  set: (val: string) => emit("update:searchQuery", val),
});
</script>
