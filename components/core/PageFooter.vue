<template>
  <footer class="mt-16 mb-12 pt-8">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-font/50 mb-3">Pages</p>
        <nav class="flex flex-col gap-[3px] text-base font-medium">
          <NuxtLink to="/" class="self-start hover:text-highlight transition-colors">Home</NuxtLink>
          <NuxtLink to="/projects" class="self-start hover:text-highlight transition-colors"
            >Projects</NuxtLink
          >
          <NuxtLink to="/posts" class="self-start hover:text-highlight transition-colors"
            >Posts</NuxtLink
          >
        </nav>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-font/50 mb-3">Extras</p>
        <nav class="flex flex-col gap-[3px] text-base font-medium">
          <a
            href="https://games.8n1.net"
            target="_blank"
            class="self-start hover:text-highlight transition-colors"
            >Games</a
          >
          <NuxtLink to="/colophon" class="self-start hover:text-highlight transition-colors"
            >Colophon</NuxtLink
          >
        </nav>
      </div>

      <div class="col-span-2 sm:col-span-1">
        <p class="text-xs font-semibold uppercase tracking-widest text-font/50 mb-3">Connect</p>
        <div class="flex gap-3">
          <a href="mailto:info@dmccarthy.org" aria-label="Email" target="_blank">
            <Icon name="lucide:mail" mode="svg" />
          </a>
          <a href="https://github.com/dmccrthy" aria-label="GitHub" target="_blank">
            <Icon name="lucide:github" mode="svg" />
          </a>
          <a href="https://www.linkedin.com/in/danmcc/" aria-label="LinkedIn" target="_blank">
            <Icon name="lucide:linkedin" mode="svg" />
          </a>
        </div>
      </div>
    </div>

    <p class="text-sm text-font/60 mt-8 text-center">
      Copyright © 2023-{{ new Date().getFullYear() }} Dan M.
    </p>
  </footer>
</template>

<style scoped lang="css">
nav a {
  border-bottom: 4px solid transparent;
  transition: border-color 0.33s ease;
}

nav a.router-link-exact-active {
  border-color: var(--color-highlight);
}
</style>
