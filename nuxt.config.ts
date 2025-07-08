import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/content", "@nuxt/icon"],
    devtools: { enabled: true },
    css: ["~/assets/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            title: "dan.sbs",
            htmlAttrs: {
                lang: "en",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/favicon.svg",
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    fonts: {
        defaults: {
            weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
    },
});