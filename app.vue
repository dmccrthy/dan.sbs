<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="css">
.page-enter-from {
    transform: translateX(-50vw);
    opacity: 0;
}

.page-leave-to {
    transform: translateX(50vw);
    opacity: 0;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.33s ease-out;
}
</style>
