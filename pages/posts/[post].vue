<template>
    <main>
        <ContentRenderer v-if="post" :value="post" />
        <!-- <Error404 v-else path="/posts" /> -->
    </main>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
    queryCollection("posts").path(route.path).first(),
);
</script>
