import { FaGrimace as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'protein',
  // visable title
  title: 'Proteins',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Protein Name',
      type: 'string',
      description: 'What kind of protein is it?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
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
