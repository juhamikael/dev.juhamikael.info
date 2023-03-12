import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import markdownIntegration from '@astropub/md'
import lit from "@astrojs/lit";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), preact(), lit(), sanity({
    projectId: "87bqw7hf",
    dataset: "production",
    useCdn: true
  }),markdownIntegration()], 
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});