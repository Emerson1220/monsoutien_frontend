import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const ImageNext = ({ url, width, height, alternativeText }) => {
  return (
    <NextImage
      layout='responsive'
      src={getStrapiMedia(url)}
      objectFit='cover'
      // width={width}
      // height={height}

      width={600}
      height={800}
      alt={alternativeText || ''}
      quality={75}
      // loading='lazy'
      priority
    />
  );
};

export default ImageNext;
