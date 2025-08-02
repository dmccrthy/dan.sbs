<template>
    <main>
        <template v-if="post">
            <div class="border-b-2 border-b-alt mb-8">
                <NuxtImg
                    :alt="post.title"
                    :src="post.image"
                    class="mb-8 w-full"
                />
                <h1 class="l">{{ post.title }}</h1>
                <h2>
                    By: {{ post.author }} ~
                    {{ new Date(post.date).toLocaleDateString("en-US") }}
                </h2>
            </div>
            <ContentRenderer :value="post" />
        </template>
        <!-- <template v-else>
            <Error404 path="/posts" />
        </template> -->
    </main>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
    queryCollection("posts").path(route.path).first(),
);

usePageMeta(post.value.title, post.value.description);
</script>
