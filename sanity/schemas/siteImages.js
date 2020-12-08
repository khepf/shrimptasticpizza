import { MdMovie as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'siteImage',
  // visable title
  title: 'Site Images',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Image Name',
      type: 'string',
      description: 'Name of the image',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
    }),
  },
};
