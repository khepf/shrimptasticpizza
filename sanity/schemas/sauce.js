import { FaOilCan as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'sauce',
  // visable title
  title: 'Sauces',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Sauce Name',
      type: 'string',
      description: 'What is the name of the sauce?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'color',
      title: 'Sauce Color',
      type: 'string',
      description: 'What color is the sauce?',
    }
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? '🍃' : ''}`,
    }),
  },
};
