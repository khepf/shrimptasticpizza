import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
// import ToppingsFilter from '../components/ToppingsFilter';
import SEO from '../components/SEO';

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.topping
            ? `Pizzas With ${pageContext.topping}`
            : `All Pizzas`
        }
      />
      {/* <ToppingsFilter activeTopping={pageContext.topping} /> */}
      <PizzaList pizzas={pizzas} />
    </>
  );
}
// for 'pizzas', this is to rename the query from 'allSanityPizza'
// to the more logical 'pizzas'

export const query = graphql`
  query PizzaQuery($toppingRegex: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
      nodes {
        name
        id
        description
        videoUrl
        slug {
          current
        }
        toppings {
          id
          name
        }
        cheeses {
          name
          id
          vegetarian
        }
        sauces {
          name
          id
          vegetarian
        }
        proteins {
          name
          id
          vegetarian
        }
        vegetables {
          name
          id
        }
        image {
          asset {
            fixed(width: 600, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
