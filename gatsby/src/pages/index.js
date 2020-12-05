import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import { ItemGridPeople, ItemGridPizzas} from '../components/ItemGrid';

function CurrentlySlicing({ slicemasters }) {
  console.log('slicemasters', slicemasters);
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
  console.log('hotSlices', hotSlices);
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

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h1>The Best Pizza By The Beach!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
