import Image from 'next/image';
import { CoverBlockType } from './CoverBlockFields';

const CoverBlockComponent: React.FC<CoverBlockType> = (props) => {
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

export default CoverBlockComponent;
