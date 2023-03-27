import React from 'react';
import { CoverBlockComponent } from '../components/CoverBlockComponent';
import { CoverBlockType } from '../blocks/CoverBlock/CoverBlockFields';

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blocks`);
  const blocks = await res.json();
  return { props: { blocks } };
};

const CoverBlockComponent = (props) => {
  const { blocks } = props;
  return (
    <CoverBlockComponent />
  );
};

export default CoverPage;
