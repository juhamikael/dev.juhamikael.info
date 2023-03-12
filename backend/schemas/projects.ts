import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'ID',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'myTags',
      title: 'Tag',
      type: 'tags',
      options: {
        includeFromRelated: 'myTags',
        
        predefinedTags: [
          {label: 'React', value: 'React'},
          {label: 'Rust', value: 'Rust'},
          {label: 'TypeScript', value: 'TypeScript'},
          {label: 'JavaScript', value: 'JavaScript'},
          {label: 'TailwindCSS', value: 'TailwindCSS'},
          {label: 'NextJS', value: 'NextJS'},
          {label: 'Sanity', value: 'Sanity'},
          {label: 'Astro', value: 'Astro'},
          {label: 'SpotifyAPI', value: 'SpotifyAPI'},
          {label: 'Firebase', value: 'Firebase'},
          {label: 'NodeJS', value: 'NodeJS'},
          {label: 'Python', value: 'Python'},
          {label: 'MySQL', value: 'MySQL'},
          {label: 'PostgreSQL', value: 'PostgreSQL'},
          {label: 'Prisma', value: 'Prisma'},
          {label: 'tRPC', value: 'tRPC'},
          {label: 'Vercel', value: 'Vercel'},
          {label: 'FastAPI', value: 'FastAPI'},
          {label: 'C#', value: 'C#'},
        ],
        
      },
    }),
    defineField({
      title: 'Blog Post Exist',
      name: 'hasBlogPost',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'document',
      fields: [
        {
          type: 'markdown',
          name: 'markdownEditor',
        },
      ],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'blogPost',
      title: 'Blog Post',
      type: 'reference',
      to: {type: 'post'},
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
    }),
    defineField({
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
    }),
    defineField({
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
    }),
  ],
})
