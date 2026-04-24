import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'pwi1dpdf',   
  dataset: 'production',          
  useCdn: true,                   
  apiVersion: '2026-04-02',       
})