// src/lib/sanityClient.ts
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'o3erqnbs',        // <- tu projectId real
  dataset: 'production',
  apiVersion: '2023-01-01',     // o la fecha actual
  useCdn: true,                 // lectura pública
})
