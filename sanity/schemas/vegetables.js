import { FaCheese as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'vegetable',
  // visable title
  title: 'Vegetables',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Vegetable Name',
      type: 'string',
      description: 'What kind of veggie is it?',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: (fields) => ({
      title: `${fields.name}`,
    }),
  },
};
