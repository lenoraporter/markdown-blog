/**
 * Site Configuration
 *
 * Edit this file to personalize your blog.
 * Every text value displayed on the site comes from here
 * (except blog post content, which lives in src/pages/posts/).
 */

export const siteConfig = {
  /** Displayed in the header */
  name: 'Markdown Blog',

  /** Browser tab title on the homepage */
  title: 'My Markdown Blog',

  /** Personal intro shown as the hero heading on the homepage */
  heroTitle: "I'm Lenora — a software engineer and writer.",

  /** Short bio shown below the hero title. A link to the about page is added automatically. */
  tagline:
    'I build things for the web and write about code, design, and creative tools. I also love exploring new frameworks and sharing what I learn. Continue learning more  ',

  /**
   * Hero image shown at the top of the homepage.
   * Place your image in the public/ folder and reference it here.
   * Set to "" to hide the image. Accepts any path relative to public/.
   * Examples: "/avatar.jpg", "/logo.png"
   */
  heroImage: '/jessica-felicio-QS9ZX5UnS14-unsplash.jpg',

  author: {
    /** Full name — used as the default post author, in meta chips, and the footer */
    name: 'Lenora Porter',
  },

  nav: {
    /** Label for the blog link in the header and footer */
    blogLabel: 'Blog',
    /** Label for the about link in the header and footer */
    aboutLabel: 'About',
  },

  /**
   * Social links shown in the footer.
   * Set any to "" to hide it. Add or remove entries as needed.
   */
  social: {
    github: 'https://github.com/lenoraporter',
    linkedin: 'https://linkedin.com/in/lenoraporter',
    twitter: '',
  },

  footer: {
    /** Name shown in the copyright line (© {year} {copyright}) */
    copyright: 'Lenora Porter',
  },
};
