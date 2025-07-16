<template>
    <main class="flex flex-col">
        <div v-for="post in posts" :key="post.id">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        </div>
    </main>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("post", () =>
    queryCollection("posts").all(),
);

usePageMeta("Posts", "Various blog posts I've written over the years.");
</script>
