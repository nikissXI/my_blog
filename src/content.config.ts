import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blogs" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    keywords: z.string().optional().default(""),
    date: z.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blogs: blogsCollection,
};
