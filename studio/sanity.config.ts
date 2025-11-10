import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { googleMapsInput } from '@sanity/google-maps-input'
import { schema } from './schemas'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Schicksale',

  projectId: 'oyap84tq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_API_KEY || '',
    }),
  ],

  schema,
})
