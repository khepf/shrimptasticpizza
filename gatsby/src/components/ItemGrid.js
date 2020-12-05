import { Link } from 'gatsby';
import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export function ItemGridPeople({ items }) {
  console.log('items', items);
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id}>
          <Link to={`/slicemaster/${item.slug.current}`}>
            <p>
              <span className="mark">{item.name}</span>
            </p>
            <img
              width="500"
              height="400"
              src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
              alt={item.name}
              style={{
                background: `url(${item.image.asset.metadata.lqip})`,
                backgroundSize: 'cover',
              }}
            />
          </Link>
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}

export function ItemGridPizzas({ items }) {
  console.log('items', items);
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyles key={item._id}>
          <Link to={`/pizza/${item.slug.current}`}>
            <p>
              <span className="mark">{item.name}</span>
            </p>
            <img
              width="500"
              height="400"
              src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
              alt={item.name}
              style={{
                background: `url(${item.image.asset.metadata.lqip})`,
                backgroundSize: 'cover',
              }}
            />
          </Link>
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
