import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"

const IndexPage = () => {
  const { allStrapiPost, strapiGlobal } = useStaticQuery(graphql`
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
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Blog-Posts" }} />
      <Headings title={strapiGlobal.SiteName} />
      <main>
        <ArticlesGrid articles={allStrapiPost.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
