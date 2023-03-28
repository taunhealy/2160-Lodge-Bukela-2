// CoverPage.tsx

import React from 'react';
import { CoverBlockType } from '../blocks/CoverBlock/CoverBlockFields';
import CoverBlockComponent from '../blocks/CoverBlock/CoverBlockComponent';

const getStaticProps= async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blocks`);
  const blocks = await res.json();
  return { props: { blocks } };
};

const CoverPage = (props) => {
  const { blocks } = props;
  return (
    <CoverBlockComponent blocks={blocks} />
  );
};

export default CoverPage;
