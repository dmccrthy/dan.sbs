<template>
  <!-- 'appear' tells Vue to run the transition on the initial render -->
  <Transition name="site" appear>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Transition>
</template>

<style lang="css">
/* App initial load transition */
.site-enter-active {
  transition: opacity 1.5s ease, transform 0.8s ease-out;
}

.site-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

/* Page/Route transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
