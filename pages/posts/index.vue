<template>
    <main class="flex flex-col">
        <div v-for="post in posts" :key="post.id" class="mb-8 [&>*]:mt-1">
            <p>{{ new Date(post.date).toLocaleDateString("en-US") }}</p>
            <h3>
                <NuxtLink :to="post.path" class="underline hover:cursor-pointer">{{ post.title }}</NuxtLink>
            </h3>
            <p>{{ post.description }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("post", () =>
    queryCollection("posts").all(),
);

usePageMeta("Posts", "Various blog posts I've written over the years.");
</script>
