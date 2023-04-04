import { Block } from 'payload/types';
import Portfolio from '../../collections/Portfolio';


const PortfolioHeroBlock: Block = {
  slug: 'portfolio-hero',
  labels: {
    singular: 'Portfolio Hero',
    plural: 'Portfolio Hero Blocks',
  },
  fields: [
    {
      name: 'itemOrder',
      label: 'Item Order',
      type: 'array',
      fields: [
        {
          name: 'itemId',
          label: 'Item',
          type: 'relationship',
          relationTo: Portfolio.slug,
          required: true,
        },
        {
          name: 'position',
          label: 'Position',
          type: 'select',
          options: [
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
            { value: 'tertiary', label: 'Tertiary' },
          ],
          required: true,
        },
      ],
      required: true,
      admin: {
        // condition: (_, siblingData) => siblingData?.type === 'portfolio-hero',
        width: '50%',
      },
    },
  ],
};

export default PortfolioHeroBlock;
