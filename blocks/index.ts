import { CallToAction } from './CallToAction/Config';
import { Component as cta } from './CallToAction/Component';
import { Content } from './Content/Config';
import { Component as content } from './Content/BlocksContent';
import { Image } from './Image/Config';
import { Component as image } from './Image/Component';

// My components

import CoverBlockComponent, { CoverBlockType } from './CoverBlock/CoverBlockComponent';
import CoverBlock from './CoverBlock/CoverBlockFields';

export const collections = {
  CallToAction,
  Content,
  Image,
  CoverBlock,
};

export const components = {
  cta,
  content,
  image,
  CoverBlockType: CoverBlockComponent ,
 
};
