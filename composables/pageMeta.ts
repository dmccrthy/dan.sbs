import { useSeoMeta } from "#app";

/**
 * Define all of the SEO/Meta tags for a given page.
 *
 * @param title Page title
 * @param description Page description
 */
export function usePageMeta(title: string, description: string): void {
    useSeoMeta({
        title: `${title} — Dan McCarthy`,
        ogTitle: `${title} — Dan McCarthy`,
        description: description,
        ogDescription: description,
    });

    defineOgImageComponent("OpenGraph", {
        title: title,
        description: description,
    });
}
