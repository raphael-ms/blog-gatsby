import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        SiteName
        Favicon {
          localFile {
            url
          }
        }
        DefaultSeo {
          MetaTitle
          MetaDescription
          ShareImage {
            localFile {
              url
            }
          }
        }
      }
    }
  `)

  const { SiteName, DefaultSeo, Favicon } = strapiGlobal

  // Merge default and page-specific SEO values
  const fullSeo = { ...DefaultSeo, ...seo }

  // Add site name to title
  fullSeo.MetaTitle = `${fullSeo.MetaTitle} | ${SiteName}`

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.MetaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.MetaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.MetaTitle,
        }
      )
    }
    if (fullSeo.MetaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.MetaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.MetaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.MetaDescription,
        }
      )
    }
    if (fullSeo.ShareImage) {
      const imageUrl = fullSeo.ShareImage.localFile.url
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      )
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })

    return tags
  }

  const metaTags = getMetaTags()

  return (
    <Helmet
      title={fullSeo.MetaTitle}
      link={[
        {
          rel: "icon",
          href: Favicon.localFile.url,
        },
      ]}
      meta={metaTags}
    />
  )
}

export default Seo