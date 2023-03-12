import { z, defineCollection } from "astro:content";

const about = z.object({
  title: z.string(),
  description: z.string(),
});

const blogSchema = z.object({
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  tags: z.array(z.string()),
  preview: z.string(),
  // subject : string with few different options
  subject: z.string().refine((value) => {
    const subjects = ["Music", "Software Developement", "Other"];
    return subjects.includes(value);
  }),
});

const porfolioSchema = z.object({
  jobTitle: z.string(),
  codeStackTags: z.array(z.string()),
  company: z.string(),
  date: z.string(),
  website: z.string(),
  projectDemo: z.string(),
});

const projectsSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  liveDemo: z.string(),
  date: z.date(),
  id: z.string(),
  blog: z.boolean(),
  github: z.string(),
  download: z.string(),
  image: z.string(),
});

const trainingAndQualificationsSchema = z.object({
  title: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  institution: z.string(),
  websiteLink: z.string(),
  stillStudying: z.boolean(),
});

export const collections = {
  about: defineCollection({
    schema: about,
  }),
  blog: defineCollection({
    schema: blogSchema,
  }),
  portfolio: defineCollection({
    schema: porfolioSchema,
  }),
  projects: defineCollection({
    schema: projectsSchema,
  }),
  trainingAndQualifications: defineCollection({
    schema: trainingAndQualificationsSchema,
  }),
};
