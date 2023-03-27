import Image from "next/image";
import { Block } from 'payload/types';
import RichText from "../../components/RichText";
import { CoverBlockType } from "./CoverBlockFields";
import React, { ReactElement } from 'react';

export const getStaticProps = async () => {

  const res = await fetch('http://localhost:3000/api/blocks');
  const data = await res.json();

  return {
props: { blocks: data }
  }
}

const CoverBlockComponent: React.FC<CoverBlockType> = (props) => {
  const { content, image } = props;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="px-2">
          <div className="py-2">
            <RichText
              content={content}
              classname="text-4xl font-bold text-center text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};`

export default CoverBlockComponent;
