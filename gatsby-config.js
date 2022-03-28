require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    //"gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:4200",
        collectionTypes: [`category`, `post`, `user`],
        singleTypes: [`global`],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
