import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure'
import {markdownSchema} from 'sanity-plugin-markdown'
import {tags} from 'sanity-plugin-tags'


export default defineConfig({
  name: 'default',
  title: 'dev.juhamikael.info',

  projectId: '87bqw7hf',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool(), markdownSchema(), tags({})],

  schema: {
    types: schemaTypes,
  },
})
