import { CollectionConfig } from 'payload/types';

const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  access: {
    create: (): boolean => true, // Everyone can create Portfolio items
    read: (): boolean => true, // Everyone can read Portfolio items
    update: (): boolean => true, // Everyone can update Portfolio items
    delete: (): boolean => true, // Everyone can delete Portfolio items
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
  ],
};

export default Portfolio;
