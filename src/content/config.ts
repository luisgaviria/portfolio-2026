import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    highlight: z.string(),
    bio: z.string(),
    ctaPrimary: z.object({
      text: z.string(),
      link: z.string(),
    }),
  }),
});

// Add this new section
const projects = defineCollection({
  type: "data", // This tells Astro it's a JSON/YAML file
  schema: z.object({
    featured: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
        desc: z.string(),
        tech: z.array(z.string()),
        role: z.string(),
      })
    ),
  }),
});
const experience = defineCollection({
  type: "data",
  schema: z.object({
    philosophy: z.object({
      title: z.string(),
      highlight: z.string(),
      bio: z.string(),
    }),
    stack: z.string(),
    focus: z.array(z.string()),
  }),
});
const cta = defineCollection({
  type: "data",
  schema: z.object({
    label: z.string(),
    title: z.string(),
    highlight: z.string(),
    description: z.string(),
    primaryBtn: z.object({
      text: z.string(),
      link: z.string(),
    }),
    secondaryBtn: z.object({
      text: z.string(),
      link: z.string(),
    }),
  }),
});

const services = defineCollection({
  type: "data",
  schema: z.object({
    services: z.array(
      z.object({
        title: z.string(),
        highlight: z.string(),
        bio: z.string(),
      })
    ),
  }),
});

export const collections = {
  hero,
  projects,
  experience,
  cta,
  services,
};
