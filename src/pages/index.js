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
          ...ArticleCard
        }
      }
      strapiGlobal {
        SiteName
        SiteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.SiteName}
        description={strapiGlobal.SiteDescription}
      />
      <main>
        <ArticlesGrid articles={allStrapiPost.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage