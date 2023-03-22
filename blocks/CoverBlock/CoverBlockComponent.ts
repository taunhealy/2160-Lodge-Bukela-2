// blocks/CoverBlock/CoverBlockcomponent.ts
import React from "react";
import Image from "next/image";
import { Block } from 'payload/types';
import { RichText } from "payload/rich-text";
import { CoverBlockType } from "./CoverBlockFields";

const CoverBlockComponent: React.FC<CoverBlockType> = (props) => {
  const { content, image } = props;

  return (
    <div className="relative w-full h-screen">
      <Image
        src={image.filename}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={image.alt}
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="px-2">
          <div className="py-2">
            <RichText
              content={content}
              classNames={{
                h1: "text-6xl font-bold text-white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverBlockComponent;
