import { getStrapiMedia } from '../lib/media';
import NextImage from 'next/image';

const ImageNext = ({ url, width, height, alternativeText }) => {
  return (
    <NextImage
      layout='responsive'
      src={getStrapiMedia(url)}
      objectFit='contain'
      width={width}
      height={height}
      alt={alternativeText || ''}
      quality={75}
      // loading='lazy'
      priority
    />
  );
};

export default ImageNext;
