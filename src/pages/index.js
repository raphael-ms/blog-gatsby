import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import HeroCover from "../components/home/hero-cover"
import Seo from "../components/seo"
import PostsGrid from "../components/home/posts-grid"

const IndexPage = () => {
  const { strapiHomepage, allStrapiPost } = useStaticQuery(graphql`
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
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <HeroCover
          logoImage={strapiHomepage?.LogoImage}
          cover={strapiHomepage?.Cover}
        />
      <main>        
        <PostsGrid posts={allStrapiPost} />
      </main>
    </Layout>
  )
}

export default IndexPage
