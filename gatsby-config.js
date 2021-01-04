module.exports = {
  siteMetadata: {
    title: `Lake kamson Developer Site`,
    description: `Open Source Projects from Mona Lisa Octocat, the Github Mascot`,
    author: `Lake Kamson`,
    keywords: `lakamson, github, open-source, projects`,
    url: `https://lakamson.dev/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-octocat.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
