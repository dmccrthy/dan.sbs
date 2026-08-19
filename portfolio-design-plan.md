# 8n1.net — Site Design Plan

## Stack

- Vue 3 + TypeScript + Nuxt 3 (SSR)
- Tailwind CSS v4
- Nuxt Content v3 (MDC files)
- Nuxt Image, Nuxt Icon (Lucide), Nuxt Fonts

## Page Structure

### Home Page (`/`)

Content-first landing, not a portfolio page:

1. **NeofetchTerminal** — neofetch/screenfetch-style block: ASCII art of `8n1.net` on the left, aligned `key: value` "system stats" about the site and Dan on the right. Below it, an interactive `dan@8n1.net:~$` prompt.
2. **RandomAssortment** — a *random* sample of 2 projects + 2 posts, re-shuffled on each page load. Keeps `/` from duplicating the archive pages.

Interactive prompt commands:
- `help` — list available commands
- `about` / `projects` / `posts` / `colophon` — navigate to the page
- `whoami` — print an identity line
- `sudo` — joke denial
- `clear` — clear the terminal
- unknown → `command not found`

Command registry is a plain array of `name / description / run` — extend it by adding another entry.

### About Page (`/about`)

The personal page — carries the former home page content:

1. **AboutSection** — headshot + bio
2. **ExperienceSection** — timeline of work history (from `content/experience/*.md`)
3. **FeaturedProjects** — top 3 projects (from `content/projects/*.md`)

### Posts Page (`/posts`)

- List all posts as cards (existing `PageCard` - actually `PostCard`)
- Search + tag filter via `SearchFilter` (AND logic)
- Results count display

### Projects Page (`/projects`)

- Same search + tag filter pattern as Posts
- Card grid, pulls from `content/projects/*.md`
- Empty image field falls back to a no-image card

### Blog Post Page (`/posts/[slug]`)

- Unchanged (already works)

### Colophon Page (`/colophon`)

- Static tech-stack / design notes page

## Navigation

- Header + footer order: **Home · About · Projects · Posts** (desktop nav + mobile dropdown + footer Pages group)

## Component Architecture

### Sections (`components/sections/`)

| Component           | Purpose                                                            |
| ------------------- | ------------------------------------------------------------------ |
| `NeofetchTerminal`  | Neofetch-style greeting block + interactive terminal prompt (home) |
| `RandomAssortment`  | Random 2 projects + 2 posts sampled per load (home)                |
| `AboutSection`      | Headshot + bio (about)                                             |
| `ExperienceSection` | Work timeline from `experience` collection (about)                 |
| `FeaturedProjects`  | Top 3 project cards (about)                                        |

### Core (`components/core/`)

- `PageHeader.vue` — logo, nav (desktop + mobile dropdown)
- `PageFooter.vue` — Pages / Extras / Connect groups, copyright

### Shared

- `SearchFilter.vue` — search input + tag chips (posts & projects)
- `PostCard.vue` — post list card
- `useSearchFilter.ts` — filtering logic composable
- `usePageMeta.ts` — SEO/meta + OG image helper

## Data / Content Collections

- `experience` — `content/experience/*.md` (title, company, startDate, endDate?, description, tags?, image?)
- `posts` — `content/posts/*.md` (title, slug, description, author, date, tags, image)
- `projects` — `content/projects/*.md` (title, slug, description, author, date, tags, image, link?)

## Random Assortment Notes

- SSR-safe: `useAsyncData` fetches all items server-side; newest 2 serve as the static/no-JS fallback; the random sample is chosen in `onMounted` (client-side) to avoid hydration mismatch.
- Randomization is Fisher–Yates shuffle + slice.

## Visual Design Notes

- **Colors**: `--color-main`, `--color-alt`, `--color-font`, `--color-highlight` from Tailwind theme
- **Typography**: Outfit (body), Lora (headings), JetBrains Mono (code + terminal)
- **Transitions**: Page transition already configured (`page-enter-active`/`page-leave-active`)
- **Terminal block**: bordered card on `bg-main`, mono text, highlight prompt, mac-style window dots — muted so it fits the minimal aesthetic