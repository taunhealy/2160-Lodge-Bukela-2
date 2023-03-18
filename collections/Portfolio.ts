import { CollectionConfig } from 'payload/types';

const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  access: {
    create: (): boolean => true,
    read: (): boolean => true,
    update: (): boolean => true,
    delete: (): boolean => true,
  },

  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Venue Title',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'images',
      label: 'Images',
      type: 'upload',
      relationTo: 'media',
      required: true,
      multiple: true,
    },
    {
      name: 'favouriteImages',
      label: 'Favorite Images',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      
  ],
};

export default Portfolio;
