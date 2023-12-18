import { defineConfig } from "vitepress";

export default defineConfig({
  title: "WebNowPlaying",
  titleTemplate: ":title - WebNowPlaying",
  description: "Enables programs to read and control media players",
  srcDir: "docs",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    lastUpdated: {
      formatOptions: {
        dateStyle: "long",
      },
    },
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/keifufu/WebNowPlaying-Docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Home", link: "/", activeMatch: "^/$" },
      {
        text: "Documentation",
        link: "/what-is-webnowplaying",
        activeMatch: "[^/]",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "What is WebNowPlaying?",
            link: "/what-is-webnowplaying",
          },
          {
            text: "Quickstart",
            link: "/quickstart",
          },
          { text: "Supported Sites", link: "/supported-sites" },
          { text: "Desktop Players", link: "/desktop-players" },
          {
            text: "Spicetify",
            link: "/spicetify",
          },
        ],
      },
      {
        text: "Browser Extension",
        items: [
          { text: "Getting Started", link: "/extension/getting-started" },
          { text: "Settings", link: "/extension/settings" },
          { text: "Changelog", link: "/extension/changelog" },
        ],
      },
      {
        text: "Rainmeter Plugin",
        items: [
          { text: "Getting Started", link: "/rainmeter/getting-started" },
          { text: "Usage", link: "/rainmeter/usage" },
          { text: "Changelog", link: "/rainmeter/changelog" },
        ],
      },
      {
        text: "OBS Script",
        items: [
          { text: "Getting Started", link: "/obs/getting-started" },
          { text: "Changelog", link: "/obs/changelog" },
        ],
      },
      {
        text: "CLI",
        items: [
          { text: "Getting Started", link: "/cli/getting-started" },
          { text: "Changelog", link: "/cli/changelog" },
        ],
      },
      {
        text: "Creating Adapters",
        items: [
          {
            text: "Getting Started",
            link: "/creating-adapters/getting-started",
          },
          {
            text: "Adapter Library",
            link: "/creating-adapters/adapter-library",
          },
        ],
      },
      {
        text: "Troubleshooting",
        link: "/troubleshooting",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/keifufu/WebNowPlaying-Docs" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present keifufu",
    },
  },
});
