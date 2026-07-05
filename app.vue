<script setup lang="ts"></script>

<template>
  <div class="accent-bar" />
  <Transition name="site" appear>
    <div>
      <PageHeader />
      <NuxtPage />
      <PageFooter />
    </div>
  </Transition>
</template>

<style lang="css">
/* Accent bar */
.accent-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 100;
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-highlight) 60%, transparent),
    var(--color-highlight),
    color-mix(in srgb, var(--color-highlight) 60%, transparent)
  );
  background-size: 200% 100%;
  animation: accent-shift 3s ease-in-out infinite;
}

@keyframes accent-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* App initial load transition */
.site-enter-active {
  transition:
    opacity 1.5s ease,
    transform 0.8s ease-out;
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
