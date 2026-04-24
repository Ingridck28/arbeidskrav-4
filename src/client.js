import { createClient } from '@sanity/client'

export default createClient({
projectId: 'pwi1dpdf',
dataset: 'production',
useCdn: true,
apiVersion: '2023-01-01'
})