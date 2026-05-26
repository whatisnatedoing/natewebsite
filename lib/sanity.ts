import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

export const ALL_POSTS_QUERY = `*[_type=="post"]|order(publishedAt desc){_id,title,slug,publishedAt,category,readTime,excerpt,coverImage,author}`
export const POST_BY_SLUG_QUERY = `*[_type=="post"&&slug.current==$slug][0]{_id,title,slug,publishedAt,category,readTime,excerpt,coverImage,author,body}`
export const ALL_PROJECTS_QUERY = `*[_type=="project"]|order(date desc){_id,title,slug,date,category,categoryLabel,coverImage,client,shortDescription}`
export const PROJECT_BY_SLUG_QUERY = `*[_type=="project"&&slug.current==$slug][0]{_id,title,slug,date,category,categoryLabel,coverImage,client,designer,description,gallery,tags,projectHeading,shortDescription,prevProject->{title,slug},nextProject->{title,slug}}`
