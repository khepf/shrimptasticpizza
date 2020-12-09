import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Video from '../components/Video';

export default function SlicemasterPage({ data: { person } }) {
  return (
    <>
      <SEO title={person.name} image={person.image.asset.src} />
      <div className="center">
      <h2>
          <span className="mark">Now Appearing On:</span>
        </h2>
        <Video videoUrl={person.videoUrl} videoName={person.name} />
        <Img fluid={person.image.asset.fluid} />
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <p>{person.description}</p>
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      videoUrl
      image {
        asset {
          fluid(maxWidth: 500, maxHeight: 375) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
