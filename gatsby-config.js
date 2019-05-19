module.exports = {
  siteMetadata: {
    title: `Christopher Kade`,
    description: `Personal blog by Christopher Kade - I mostly write about web development (JS, React, Vue etc.) and CSS.`,
    author: `@christo_kade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: `markdown-pages`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              aliases: { js: "javascript" },
            },
          },
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-127876951-1",
      },
    },
  ],
}
