interface SearchableItem {
  [key: string]: unknown;
  title?: string;
  description?: string;
  tags?: string[];
}

export function useSearchFilter<T extends SearchableItem>(
  items: Ref<T[]> | ComputedRef<T[]> | T[],
  options?: {
    searchFields?: string[];
    filterField?: string;
  },
) {
  const searchQuery = ref("");
  const activeTags = ref<string[]>([]);
  const searchFields = options?.searchFields ?? ["title", "description"];
  const filterField = options?.filterField ?? "tags";

  const allTags = computed<string[]>(() => {
    const raw = toValue(items);
    const tagSet = new Set<string>();
    for (const item of raw) {
      const tags = item[filterField];
      if (Array.isArray(tags)) {
        for (const tag of tags) {
          if (tag) tagSet.add(tag);
        }
      }
    }
    return [...tagSet].sort();
  });

  function toggleTag(tag: string) {
    if (activeTags.value.includes(tag)) {
      activeTags.value = activeTags.value.filter((t) => t !== tag);
    } else {
      activeTags.value.push(tag);
    }
  }

  function clearFilters() {
    searchQuery.value = "";
    activeTags.value = [];
  }

  const filtered = computed<T[]>(() => {
    const raw = toValue(items);
    return raw.filter((item) => {
      if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase();
        const match = searchFields.some((field) => {
          const val = item[field];
          return typeof val === "string" && val.toLowerCase().includes(q);
        });
        if (!match) return false;
      }

      if (activeTags.value.length > 0) {
        const itemTags = item[filterField];
        if (!Array.isArray(itemTags)) return false;
        const hasTag = activeTags.value.some((tag) => itemTags.includes(tag));
        if (!hasTag) return false;
      }

      return true;
    });
  });

  return {
    searchQuery,
    activeTags,
    allTags,
    filtered,
    toggleTag,
    clearFilters,
  };
}
