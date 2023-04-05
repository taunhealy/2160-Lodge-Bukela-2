import React from 'react';
import Image from 'next/image';
import RichText from '../../components/RichText';
import { MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'cover-h2',
  blockName?: string,
  content: unknown,
  image: MediaType,
};

const CoverH2Component: React.FC<Type> = (props) => {
  const { content, image } = props;

  return (
    <div>
      <Image
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${image.filename}`}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <RichText content={content} />
    </div>
  );
};

export default CoverH2Component;
