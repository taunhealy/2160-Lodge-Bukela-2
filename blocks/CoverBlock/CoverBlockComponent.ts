import Image from "next/image";
import { Block } from 'payload/types';
import RichText from "../../components/RichText";
import { CoverBlockType } from "./CoverBlockFields";
import React, { ReactElement } from 'react';

const CoverBlockComponent: React.FC<CoverBlockType> = (props) => {
  const { content, image } = props;

  return (
    <NextImage
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filenameToRender}`}
          alt={image.alt}
          sizes={sizesToUse}
          width={width}
          height={height}
        />
        {caption && (
          <RichText
            className={classes.caption}
            content={caption}
          />

  );
};`

export default CoverBlockComponent;