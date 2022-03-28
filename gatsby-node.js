const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve("./src/templates/blog-post.js")

  const result = await graphql(
    `
      {
        allStrapiPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )

    return
  }

  const posts = result.data.allStrapiPost.nodes

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: `/post/${post.slug}`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      })
    })
  }
}
