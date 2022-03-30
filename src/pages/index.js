import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroCover from "../components/hero-cover"
import Seo from "../components/seo"

const IndexPage = () => {
  const { strapiHomepage } = useStaticQuery(graphql`
    query {
      strapiHomepage {
        About
        PageTitle
        HowManyPosts
        LogoImage {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData (
                width: 1058
                height: 259
              )
            }
          }
        }
        Cover {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        AboutPicture {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      {/* <Headings title={strapiGlobal.SiteName} /> */}
      <main>
        <HeroCover
          logoImage={strapiHomepage?.LogoImage}
          cover={strapiHomepage?.Cover}
        />
      </main>
    </Layout>
  )
}

export default IndexPage
