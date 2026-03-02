# Markdown Blog

A clean, editorial-style personal blog built with [Astro](https://astro.build). Every post is a markdown file, every setting lives in one config. No CMS, no database. Fork it, make it yours, deploy to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open the printed URL in your browser.

## Make it yours

After forking, update these files to make the blog your own.

### 1. `src/site.config.ts` — Your identity

This is the single source of truth for all site text. Open it and update:

| Field | What it controls | Example |
|---|---|---|
| `name` | Header site name | `"Jane's Blog"` |
| `title` | Browser tab title | `"Jane Doe — Blog"` |
| `heroTitle` | Homepage intro heading | `"I'm Jane — a designer and maker."` |
| `tagline` | Homepage bio paragraph | `"I design interfaces and write about..."` |
| `heroImage` | Photo above the title (see below) | `"/avatar.jpg"` or `""` |
| `heroImageLetter` | Fallback initials when no image | `"JD"`, `"✦"`, or `""` |
| `faviconLetter` | Browser tab icon character | `"J"`, `"🚀"`, `"✦"` |
| `author.name` | Post bylines and footer | `"Jane Doe"` |
| `footer.copyright` | Copyright name | `"Jane Doe"` |

**Hero image options:**

- **Your photo:** Drop an image in `public/` and set `heroImage: "/your-photo.jpg"`
- **Auto-generated initials:** Set `heroImage: ""` — generates initials from your author name
- **Custom character:** Set `heroImage: ""` and `heroImageLetter: "✦"`
- **No image at all:** Set both `heroImage: ""` and `heroImageLetter: ""`

### 2. `src/pages/about.md` — Your about page

Edit the frontmatter and body content with your own info.

### 3. `astro.config.mjs` — Your deploy URL

```js
export default defineConfig({
  site: 'https://<your-username>.github.io/<your-repo>',
  base: '/<your-repo>',
});
```

If you're using a `username.github.io` repo, set `base: '/'` instead.

### 4. Delete the example posts

Remove or replace the files in `src/pages/posts/` with your own.

---

## Writing posts

Add a `.md` file to `src/pages/posts/`:

```md
---
layout: ../../layouts/PostLayout.astro
title: My new post
description: A short summary shown in the post list.
pubDate: 2026-03-01
readingTime: 4
---

Your content here.
```

Posts are sorted by `pubDate` (newest first). The homepage shows the latest 6. The blog archive at `/blog/` shows all posts, paginated at 10 per page.

### Adding images to posts

Place images in `public/images/` and reference them in your markdown:

```md
![Diagram](/markdown-blog/images/my-diagram.svg)
```

---

## Optional pages and sections

Every page beyond blog posts is **optional**. You choose what your site includes. If you don't need a section, hide it — no empty pages, no dead nav links.

### Videos (optional)

The videos section links to external content — YouTube videos, conference talks, podcast episodes, any URL. Each entry opens in a new tab.

**When enabled**, you get:

- A "Latest Videos" section on the homepage (shows the 3 most recent)
- A "Videos" link in the header and footer navigation
- A dedicated `/videos/` archive page with auto-extracted YouTube thumbnails and pagination

**To enable it**, add entries to the `videos` array in `site.config.ts`:

```ts
videos: [
  { title: 'My talk at JSConf', url: 'https://www.youtube.com/watch?v=...' },
  { title: 'Podcast interview', url: 'https://podcast.example.com/ep-42' },
],
```

**To hide it completely:**

```ts
// 1. Empty the array — removes the homepage section and the /videos/ page content
videos: [],

// 2. Clear the nav label — removes the link from header and footer
nav: {
  videosLabel: '',
},
```

That's it. No homepage section, no nav link, no `/videos/` page. The site works as a pure blog.

### About page (optional)

The about page lives at `src/pages/about.md`. To remove it, delete the file and clear the nav label:

```ts
nav: {
  aboutLabel: '',
},
```

### Section headings

Rename the homepage section headings to match your content:

```ts
sections: {
  writings: 'Latest Writings',   // or "Articles", "Posts", "Notes"
  videos: 'Latest Videos',       // or "Talks", "Episodes", "Links"
},
```

---

## Social links

```ts
social: {
  github: 'https://github.com/you',
  linkedin: 'https://linkedin.com/in/you',
  twitter: '',  // empty string = hidden
},
```

Set any value to `""` to hide it from the footer.

## Theme

Light and dark mode with a toggle in the header. Respects the visitor's system preference on first visit. Colors are CSS custom properties in `Layout.astro` — edit the `:root` and `:root[data-theme='dark']` blocks to change the palette.

## Deploy to GitHub Pages

1. Push your fork to GitHub
2. Go to **Settings > Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Push to `main` — the included workflow builds and deploys automatically

Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

> **Getting Jekyll errors?** If you see errors about `jekyll-relative-links` or `jekyll-coffeescript`, your Pages source is set to "Deploy from a branch" instead of "GitHub Actions." Go to **Settings > Pages > Source** and switch it.

To build locally:

```bash
npm run build
```

## Project structure

```
src/
├── site.config.ts          # All site text and settings
├── layouts/
│   ├── Layout.astro        # Global shell (header, footer, theme)
│   ├── PostLayout.astro    # Blog post layout with progress bar
│   └── AboutLayout.astro   # About page layout
├── pages/
│   ├── index.astro         # Homepage
│   ├── about.md            # About page (optional)
│   ├── blog/
│   │   └── [...page].astro # Blog archive with pagination
│   ├── videos/
│   │   └── [...page].astro # Videos archive with pagination (optional)
│   └── posts/
│       └── *.md            # Your blog posts
public/
├── images/                 # Post images
└── *.jpg                   # Hero image
```

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run check` | Run Astro's type checker |

## Features

- Dark / light mode with system preference detection
- Configurable favicon from a single character
- Auto-generated avatar fallback from author initials
- Blog archive with numbered pagination
- Optional videos page with YouTube thumbnail extraction
- Reading progress bar on posts
- Social links in the footer
- View Transitions for smooth navigation
- Fully static — zero JavaScript frameworks
- Mobile responsive
