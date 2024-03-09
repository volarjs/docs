import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, reference, z } from "astro:content";

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
    }),
});

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      authors: z.array(reference("authors")),
      image: image().optional(),
      type: z.literal("blog").default("blog"),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog: blogCollection,
  authors: authorCollection,
};
