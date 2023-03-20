import { ImgBlockProps } from '@/types/types';
import Image from 'next/image';
function ImgBlock({ src, click, styles }: ImgBlockProps) {
  return (
    <div onClick={click}>
      <Image className={styles} width={600} height={800} key={src} src={src} alt={src} />
    </div>
  );
}

export default ImgBlock;
