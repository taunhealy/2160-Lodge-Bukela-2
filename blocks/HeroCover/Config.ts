// blocks/CoverBlock/fields.ts
import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export const CoverBlock: Block = {
  slug: 'cover',
  labels: {
    singular: 'Cover',
    plural: 'Covers',
  },
  fields: [
    {
      name: 'content',
      label: 'Heading',
      type: 'richText',
      required: true,
    },
    {
      name: 'feature',
      label: 'Cover Image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
  ],
};
