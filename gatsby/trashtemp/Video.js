import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../src/components/SEO';

const VideoGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, ifr));
`;

export default function SingleVideoPage({ data: { video } }) {
  return (
    <>
      <SEO title={video.name} image={video.image?.asset?.fluid?.src} />

      <VideoGrid>
        <Img fluid={video.image.asset.fluid} />
        <div>
          <h2 className="mark">{video.name}</h2>
        </div>
      </VideoGrid>
    </>
  );
}

// this needs to be dynamic based on the slug passed in via context in gastby-node.js
export const query = graphql`
  query($slug: String!) {
    video: sanityVideo(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
