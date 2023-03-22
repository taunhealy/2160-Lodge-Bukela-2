// blocks/CoverBlock/fields.ts
import { Block } from "payload/types";
import { MediaType } from "../../collections/Media";
import RichText from "../../components/RichText";

export type CoverBlockType = {
  blockType: 'content';
  blockName?: string;
  content: unknown;
  image: MediaType;
};

const CoverBlock: Block = {
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

export default CoverBlock;
