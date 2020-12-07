import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';
import vegetables from './vegetables';

export default {
  // computer name
  name: 'pizza',
  // visable title
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a little bit about the pizza',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
    {
      name: 'sauces',
      title: 'Sauces',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sauce' }] }],
    },
    {
      name: 'cheeses',
      title: 'Cheeses',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cheese' }] }],
    },
    {
      name: 'vegetables',
      title: 'Vegetables',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'vegetable' }] }],
    },
    {
      name: 'proteins',
      title: 'Proteins',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'protein' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      sauces: 'sauces',
      cheeses: 'cheeses',
      proteins: 'proteins',
      vegetables: 'vegetables',
      toppings: 'toppings',
    },
    prepare: ({
      title,
      media,
      sauces,
      cheeses,
      proteins,
      vegetables,
      toppings,
    }) => {
      // filter undefined toppings out
      // return the preview object for the pizza
      // const tops = Object.values(toppings).filter(Boolean);
      const saucesLength = `${sauces.length > 0 ? sauces.length : '0'}`;
      const cheesesLength = `${cheeses.length > 0 ? cheeses.length : '0'}`;
      const proteinsLength = `${proteins.length > 0 ? proteins.length : '0'}`;
      const vegetablesLength = `${
        vegetables.length > 0 ? vegetables.length : '0'
      }`;
      const toppingsLength = `${toppings.length > 0 ? toppings.length : '0'}`;
      return {
        title,
        media,
        subtitle: `
        Sauces: ${saucesLength}, 
        Cheeses: ${cheesesLength}, 
        Proteins: ${proteinsLength}, 
        Vegetables: ${vegetablesLength},
        Additional Toppings: ${toppingsLength} `,
      };
    },
  },
};
