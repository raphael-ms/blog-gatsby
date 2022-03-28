import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PostPage = ({ data }) => {
  const post = data?.strapiPost

  const seo = {
    MetaTitle: post.title,
    MetaDescription: post.body,
    ShareImage: post.mainImage,
  }

  return (
    <Layout as="post">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{post.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{post.body}</p>
        <GatsbyImage
          image={getImage(post?.mainImage?.localFile)}
          alt={post?.mainImage?.alternativeText}
          className="mt-6"
        />
      </header>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiPost(slug: { eq: $slug }) {
      id
      slug
      title
      body
      mainImage {
        alternativeText
        localFile {
          url
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`

export default PostPage
