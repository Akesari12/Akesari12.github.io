/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/aniket-test-site",
  /* Your site config here */
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-remove-root-p-tag`,
            options: {
              parents: ["default-site-plugin"],
            },
          },
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'research',
        path: `${__dirname}/src/site-content/`,
      },
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Newsreader\:400,500,600,700`,
        `IBM Plex Sans\:400,500,600,700`,
      ],
      display: 'swap'
    }
  }
  ],
  siteMetadata: {
    title: 'Aniket Kesari',
    description: "Aniket Kesari's personal website"
  }
}

