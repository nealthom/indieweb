module.exports = {
  siteMetadata: {
    title: `Thomas Neal`,
    description: `I am interested in many things, currently exploring indieweb`,
    author: `nealthom`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Neal`,
        short_name: `nealthom`,
        start_url: `/`,
        background_color: `#0ccac4`,
        theme_color: `#0ccac4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: 'www.indieweb.netlify.com', // webmention.io username
        identity: {
          github: 'nealthom',
          twitter: 'nealthom' // no @
        },
        mentions: true,
        pingbacks: true,
        domain: 'www.indieweb.netlify.com',
        token: process.env.WEBMENTIONS_TOKEN
      }
    }
  ],
}
