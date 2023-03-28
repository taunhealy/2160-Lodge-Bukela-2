
import React from 'react';
import RichText from '../../components/RichText';
import classes from './index.module.css';

export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const BlocksContent: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};

export default BlocksContent;
