<template>
    <header
        class="flex pt-8 mb-12 md:pt-12 sticky top-0 z-10 bg-main opacity-90 [&>*]:opacity-100"
    >
        <h2 class="py-4 mr-auto self-center">dan.sbs</h2>
        <div class="flex items-center mr-4">
            <!-- Desktop Nav -->
            <nav class="hidden sm:flex nav-bar">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/projects">Projects</NuxtLink>
                <NuxtLink to="/posts">Posts</NuxtLink>
            </nav>

            <!-- Mobile Nav -->
            <nav class="flex items-center sm:hidden">
                <button
                    @click="toggleDropdown()"
                    class="hover:cursor-pointer"
                    aria-label="Open mobile navigation"
                >
                    <Icon v-if="mobileDropdown" name="lucide:x" mode="svg" />
                    <Icon v-else name="lucide:align-justify" mode="svg" />
                </button>

                <!-- Mobile nav is only shown when toggled -->
                <div v-if="mobileDropdown" class="nav-bar-mobile">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/projects">Projects</NuxtLink>
                    <NuxtLink to="/posts">Posts</NuxtLink>
                </div>
            </nav>
        </div>

        <ThemeToggle />
    </header>
</template>

<script lang="ts" setup>
const mobileDropdown: Ref<boolean> = ref(false);

function toggleDropdown(): void {
    mobileDropdown.value = !mobileDropdown.value;
}
</script>

<style lang="css">
nav a {
    border-bottom: 4px solid transparent;
    transition: all 0.33s ease;
}

nav a:hover,
nav a.router-link-active {
    border-color: var(--color-highlight);
}
</style>
