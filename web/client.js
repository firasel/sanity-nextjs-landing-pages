import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'rmd9vek1',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
