/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require(`dotenv`).config({
   path: `.env`,
})

module.exports = {
  pathPrefix: "/aniket-test-site",
  /* Your site config here */
  plugins: [
     {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // 'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
        `Anek Tamil\:100,200,300,400,500,600,700,800`,
        `Material Symbols Rounded\:300,400,500,600,700,800`,
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

