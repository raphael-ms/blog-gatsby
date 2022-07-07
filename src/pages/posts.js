import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"
import Tags from "../components/tags"

const PostsPage = () => {
  const { allStrapiPost, strapiGlobal, allStrapiCategory } = useStaticQuery(graphql`
    query {
      allStrapiPost {
        nodes {
          id
          slug
          title
          body
          mainImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.77)
              }
            }
          }
        }
      }
      strapiGlobal {
        SiteName
      }
      allStrapiCategory {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo
        seo={{
          metaTitle: "Blog-Posts",
        }}
      />
      <Headings title={strapiGlobal.SiteName} />
      <main>
        <Tags tags={allStrapiCategory.nodes} />
        <ArticlesGrid articles={allStrapiPost.nodes} />
      </main>
    </Layout>
  )
}

export default PostsPage
