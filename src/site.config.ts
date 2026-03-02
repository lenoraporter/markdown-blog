/**
 * Site Configuration
 *
 * Edit this file to personalize your blog.
 * Every text value displayed on the site comes from here
 * (except blog post content, which lives in src/pages/posts/).
 */

export const siteConfig = {
  /** Displayed in the header and hero section */
  name: "Markdown Blog",

  /** Browser tab title on the homepage */
  title: "My Markdown Blog",

  /** Tagline shown below the hero title on the homepage */
  tagline:
    "A simple blog where every post is just a Markdown file committed to GitHub. No CMS, no database \u2014 just words.",

  author: {
    /** Full name — used as the default post author, in meta chips, and the footer */
    name: "Lenora Porter",
  },

  nav: {
    /** Label for the blog link in the header and footer */
    blogLabel: "Blog",
    /** Label for the about link in the header and footer */
    aboutLabel: "About",
  },

  footer: {
    /** Name shown in the copyright line (© {year} {copyright}) */
    copyright: "Lenora Porter",
  },
};
