require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:4200",
        //accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "category",
          },
          {
            singularName: "post",
          },
          {
            singularName: "user",
          },
        ],
        // singleTypes: [
        //   {
        //     singularName: "about",
        //     queryParams: {
        //       populate: {
        //         blocks: {
        //           populate: "*",
        //         },
        //       },
        //     },
        //   },
        //   {
        //     singularName: "global",
        //     queryParams: {
        //       populate: {
        //         favicon: "*",
        //         defaultSeo: {
        //           populate: "*",
        //         },
        //       },
        //     },
        //   },
        // ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}