import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'mtn4d43i',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25'
})

const builder = imageUrlBuilder(client)

export const urlFor = (url) => builder.image(url)
export default client