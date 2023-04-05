// blocks/CoverBlock/fields.ts
import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export const CoverH2: Block = {
  slug: 'coverh2',
  labels: {
    singular: 'Cover-h2',
    plural: 'Covers-h2',
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
