import { Content } from './Content/Config';
import { Component as content } from './Content/BlocksContent';
import { Image } from './Image/Config';
import { Component as image } from './Image/Component';

// My components
import { CoverBlock } from './HeroCover/Config';
import { Component as cover } from './HeroCover/Component';
import { Component as coverh2} from './CoverH2/Component';
import { CoverH2 } from './CoverH2/Config';

export const collections = {
  Content,
  Image,
  CoverBlock,
  CoverH2
};

export const components = {
  content,
  image,
  cover,
  coverh2,
};
