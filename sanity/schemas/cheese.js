import { FaCheese as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'cheese',
  // visable title
  title: 'Cheeses',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Cheese Name',
      type: 'string',
      description: 'What kind of cheese is it?',
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
      name: 'consistency',
      title: 'Cheese Consistency',
      type: 'string',
      description: 'Hard or Soft cheese?',
    },
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
