import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
    collections: {
        // Need this to setup sitemap for dynamic pages
        content: defineCollection(
            asSitemapCollection({
                type: "page",
                source: "**/*.md",
            }),
        ),
        posts: defineCollection({
            type: "page",
            source: "posts/*.md",
            schema: z.object({
                title: z.string(),
                description: z.string(),
                author: z.string(),
                date: z.date(),
                tags: z.array(z.string()),
                image: z.string(),
            }),
        }),
    },
});
