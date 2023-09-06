import starlight from "@astrojs/starlight";
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://volarjs.dev/",
  integrations: [
    starlight({
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Volar's logo, a light-blue prism with a very subtle tint of red in the top right and a wave going through the prism.",
      },
      title: "Volar.js",
      description: "The Embedded Language Tooling Framework",
      social: {
        github: "https://github.com/volarjs/",
        twitter: "https://twitter.com/johnsoncodehk",
        discord: "https://discord.gg/Ha7XJbMJZc",
      },
      customCss: ["./src/styles/custom.css"],
      editLink: {
        baseUrl: "https://github.com/volarjs/docs/edit/main/",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "Core Concepts",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Why Volar?", link: "/core-concepts/why-volar" },
            { label: "Embedded Languages", link: "/core-concepts/embedded-languages" },
            { label: "Volar.js Labs", link: "/core-concepts/volar-labs" },
          ],
          // TODO: Use `autogenerate` once it allows you to order the sidebar
        },
        {
          label: "Guides",
          items: [
            { label: "Your First Volar Language Server", link: "/guides/first-server" },
            { label: "File Structure", link: "/guides/file-structure" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: sharpImageService() },
});
