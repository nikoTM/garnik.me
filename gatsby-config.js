module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'A spot for myself',
    //     short_name: 'TheSpot',
    //     start_url: '/',
    //     background_color: '#333333',
    //     theme_color: '#333333',
    //     display: 'minimal-ui',
    //     icon: 'src/images/favicon.png' // This path is relative to the root of the site.
    //   }
    // },
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
