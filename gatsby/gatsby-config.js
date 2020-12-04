import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Shrimptastic Pizza`,
    siteUrl: `https://shrimptastic.net`,
    description: `The rootinest, tootinest, shootinest pizza this side of 
    Shrimptown.`,
    twitter: '@shrimping_music',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'kaytbf15',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
