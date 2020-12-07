import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'person',
  // visable title
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a little bit about them',
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
};
