<template>
    <div>
        <h1>404</h1>
        <h2 class="mb-16">Page Not Found :(</h2>
        <NuxtLink
            :to="props.path"
            class="bg-highlight px-4 py-2 rounded-2xl text-main text-center w-fit"
            >Back</NuxtLink
        >
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    path: String,
});
</script>
