<template>
  <header class="flex pt-8 mb-12 md:pt-12 z-10 relative">
    <NuxtLink to="/" class="header-logo">8n1.net</NuxtLink>
    <div class="flex items-center mr-4">
      <!-- Desktop Nav -->
      <nav class="max-sm:hidden nav-bar">
        <NuxtLink to="/" class="hover:text-highlight transition-colors">Home</NuxtLink>
        <NuxtLink to="/projects" class="hover:text-highlight transition-colors">Projects</NuxtLink>
        <NuxtLink to="/posts" class="hover:text-highlight transition-colors">Posts</NuxtLink>
      </nav>

      <!-- Mobile Nav toggle -->
      <button
        class="sm:hidden hover:cursor-pointer"
        aria-label="Open mobile navigation"
        @click.stop="toggleDropdown()"
      >
        <Icon v-if="mobileDropdown" name="lucide:x" mode="svg" />
        <Icon v-else name="lucide:align-justify" mode="svg" />
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div v-if="mobileDropdown" ref="dropdownRef" class="nav-bar-mobile">
      <NuxtLink to="/" class="hover:text-highlight transition-colors" @click="closeDropdown"
        >Home</NuxtLink
      >
      <NuxtLink to="/projects" class="hover:text-highlight transition-colors" @click="closeDropdown"
        >Projects</NuxtLink
      >
      <NuxtLink to="/posts" class="hover:text-highlight transition-colors" @click="closeDropdown"
        >Posts</NuxtLink
      >
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileDropdown: Ref<boolean> = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggleDropdown(): void {
  mobileDropdown.value = !mobileDropdown.value;
}

function closeDropdown(): void {
  mobileDropdown.value = false;
}

function onDocumentClick(event: MouseEvent): void {
  if (
    mobileDropdown.value &&
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node)
  ) {
    closeDropdown();
  }
}

onMounted(() => {
  setTimeout(() => {
    document.addEventListener("click", onDocumentClick);
  }, 0);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocumentClick);
});
</script>

<style lang="css">
nav a {
  border-bottom: 4px solid transparent;
  transition:
    border-color 0.33s ease,
    color 0.33s ease;
}

nav a:hover,
nav a.router-link-exact-active {
  border-color: var(--color-highlight);
  color: var(--color-highlight);
}
</style>
