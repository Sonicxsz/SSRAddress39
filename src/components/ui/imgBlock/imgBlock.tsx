import { ImgBlockProps } from '@/types/types';
import {LazyLoadImage} from 'react-lazy-load-image-component'

function ImgBlock({ src, click, styles }: ImgBlockProps) {
  return (
    <div onClick={click}>
      <LazyLoadImage className={styles}  key={src} src={src} alt={src} />
    </div>
  );
}

export default ImgBlock;
