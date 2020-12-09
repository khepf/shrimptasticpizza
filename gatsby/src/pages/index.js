import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import { ItemGridPeople, ItemGridPizzas } from '../components/ItemGrid';

const HomePageImageGrid = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 15px;
`;

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On Duty</span>
      </h2>
      <p>Standing By, Waiting For Your Order!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGridPeople items={slicemasters} />}
    </div>
  );
}
function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Whole Pies, Or By The Slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}{' '}
      {hotSlices && !hotSlices?.length && <p>Out of Pizzas!</p>}
      {hotSlices?.length && <ItemGridPizzas items={hotSlices} />}
    </div>
  );
}

export default function HomePage({ data }) {
  const { slicemasters, hotSlices } = useLatestData();
  const ytSubscribeImage = data.siteImages.nodes[0].image.asset.fluid;
  const spotifyLogo = data.siteImages.nodes[1].image.asset.fluid;
  return (
    <div className="center">
      <h1>The Best Pizza By The Beach!</h1>
      <HomePageImageGrid>
        <a href="https://www.youtube.com/channel/UCM32ubo9Glp_85PJNYt14kQ?sub_confirmation=1">
          <Img
            fluid={ytSubscribeImage}
            style={{ height: '50px', width: '50px' }}
          />
        </a>
        <a href="https://open.spotify.com/artist/6aOXJx6dF1oQ0GMGEYf5lJ?si=e726QwdPR2OenkU1gxwi9A">
          <Img fluid={spotifyLogo} style={{ height: '50px', width: '50px' }} />
        </a>
      </HomePageImageGrid>

      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}

export const query = graphql`
  query {
    siteImages: allSanitySiteImage {
      nodes {
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
