<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="css">
.page-enter-from {
    opacity: 0;
}

.page-leave-to {
    opacity: 0;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.33s ease-out;
}
</style>
