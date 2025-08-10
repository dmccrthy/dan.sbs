<template>
    <main>
        <template v-if="post">
            <div class="border-b-2 border-b-alt mb-8">
                <div class="mb-4">
                    <h1 class="my-[-16px]">{{ post.title }}</h1>
                    <p class="font-semibold">
                        By: {{ post.author }} -
                        {{ new Date(post.date).toLocaleDateString("en-US") }}
                    </p>
                </div>
                <NuxtImg
                    :alt="post.title"
                    :src="post.image"
                    class="mb-8 w-full rounded-md"
                />
            </div>
            <ContentRenderer :value="post" />
        </template>
    </main>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
const { data: post } = await useAsyncData(`post-${slug}`, () => {
    return queryCollection("posts").where("slug", "=", slug).first();
});

usePageMeta(post.value.title, post.value.description);
</script>
