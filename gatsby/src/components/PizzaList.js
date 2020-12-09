import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 2;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function toppingsOrNone(pizza, toppingCategory) {
  const tops = pizza[toppingCategory].map((top) => top.name).join(', ');
  if (pizza[toppingCategory].length > 0) {
    return tops;
  }
  return 'none';
}

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <div>
        <p>Sauces: {toppingsOrNone(pizza, 'sauces')}</p>
        <p>Cheeses: {toppingsOrNone(pizza, 'cheeses')}</p>
        <p>Proteins: {toppingsOrNone(pizza, 'proteins')}</p>
        <p>Veggies: {toppingsOrNone(pizza, 'vegetables')}</p>
        <p>Other: {toppingsOrNone(pizza, 'toppings')}</p>
      </div>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </PizzaStyles>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
}
