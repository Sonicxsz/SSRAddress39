import { MenuItemProps } from '@/types/types';
import styles from './menuItem.module.css';
import Image from 'next/image';
import cn from 'classnames'
function MenuItem({ name, img, src, black }: MenuItemProps) {
    return (
        <div className={styles.menuItemWrapper}>
            <a href={src} target="_blank" rel="noreferrer">
                <h2 className={cn(styles.menuPageTitle, black && styles.black)}>{name}</h2>
                <Image src={img} alt={name} width={400} height={720}  className={styles.img}/>
            </a>
            <div className={styles.line}></div>
        </div>
    );
}

export default MenuItem;
