import React from 'react';
import { graphql } from 'gatsby';
import VideoList from '../src/components/VideoList';
import SEO from '../src/components/SEO';

export default function VideosPage({ data }) {
  const videos = data.videos.nodes;
  return (
    <>
      <SEO title="videos" />
      <VideoList videos={videos} />
    </>
  );
}
// for 'videos', this is to rename the query from 'allSanityVideo'
// to the more logical 'videos'

export const query = graphql`
  query VideoQuery {
    videos: allSanityVideo {
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
