/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Read in environment variables based on the current `NODE_ENV`.
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    // TODO: Adjust the static site navigation or remove it entirely.
    navigation: [
      {path: '/', label: 'Home', description: 'Navigate to the home page'},
      {path: '/films', label: 'Films', description: 'Film listing'},
      {path: '/persons', label: 'Persons', description: 'Character listing'},
    ]
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-layout',
    'gatsby-plugin-postcss',
    // TODO: Add static data sources and remove this example.
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'swapi',
        fieldName: 'swapi',
        url: process.env.GATSBY_SWAPI_ENDPOINT,
      },
    },
  ].concat(process.env.NODE_ENV === 'development' ? [
    // TODO: Add mock servers for external data sources.
    // This is a very bad example for a data source override. Find a better one.
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'swapiMocked',
        fieldName: 'swapi',
        url: process.env.GATSBY_SWAPI_ENDPOINT,
      },
    },
  ]: []),
};
