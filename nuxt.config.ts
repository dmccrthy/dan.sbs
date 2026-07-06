import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: [
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxt/eslint",
    "nuxt-og-image",
  ],

  devtools: { enabled: true },
  css: ["~/app.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "8n1.net",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        // Favicon SVG & 32x32
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "32x32",
          href: "/favicon.ico",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
    },
  },

  image: {
    loading: "lazy",
    quality: 80,
    format: ["webp", "jpg", "png"],
  },

  content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          theme: "github-light",
          langs: ["js", "shell"],
        },
      },
    },

    experimental: {
      // Tells Nuxt Content to use Node's built-in sqlite module
      // which helps prevents issues with 'better-sqlite3'.
      sqliteConnector: "native",
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  site: { url: "https://8n1.net", name: "8n1.net" },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt", "/404.html"],
    },
  },

  router: {
    trailingSlash: false,
  },
});
