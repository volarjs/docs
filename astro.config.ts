import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://volarjs.dev/",
  integrations: [
    starlight({
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Volar's logo, a light-blue prism with a very subtle tint of red in the top right and a wave going through the prism.",
      },
      expressiveCode: {
        plugins: [pluginCollapsibleSections()],
      },
      title: "Volar.js",
      description: "The Embedded Language Tooling Framework",
      social: {
        github: "https://github.com/volarjs/",
        twitter: "https://twitter.com/johnsoncodehk",
        discord: "https://discord.gg/N94ECvy2uW",
      },
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl: "https://github.com/volarjs/docs/edit/main/",
      },
      lastUpdated: true,
      components: {
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        TableOfContents: "./src/components/starlight/TableOfContents.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
      },
      sidebar: [
        {
          label: "Core Concepts",
          translations: { 'zh-CN': '核心概念' },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Why Volar?", link: "/core-concepts/why-volar", translations: { 'zh-CN': '为什么选择 Volar?' } },
            { label: "Embedded Languages", link: "/core-concepts/embedded-languages", translations: { 'zh-CN': '嵌入式语言' } },
            { label: "Volar Labs", link: "/core-concepts/volar-labs" },
          ],
          // TODO: Use `autogenerate` once it allows you to order the sidebar
        },
        {
          label: "Guides",
          translations: { 'zh-CN': '指南' },
          items: [
            { label: "Your First Volar Language Server", link: "/guides/first-server", translations: { 'zh-CN': '你的第一个 Volar 语言服务器' } },
            { label: "File Structure", link: "/guides/file-structure", translations: { 'zh-CN': '文件结构' } },
          ],
        },
        {
          label: "Reference",
          translations: { 'zh-CN': '参考' },
          autogenerate: { directory: "reference" },
        },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en-US',
        },
        'zh-cn': {
          label: '简体中文',
          lang: 'zh-CN',
        }
      }
    }),
  ],
});
