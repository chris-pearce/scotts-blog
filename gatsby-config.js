require('dotenv').config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    siteUrl: 'https://citychiropractor.com.au',
    title: 'City Chiropractic Care',
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-remark',
  ],
};
