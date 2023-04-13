import { MenuItemProps } from '@/types/types';
import styles from './menuItem.module.css';
import Image from 'next/image';

function MenuItem({ name, img, src }: MenuItemProps) {
    return (
        <div className={styles.menuItemWrapper}>
            <a href={src} target="_blank" rel="noreferrer">
                <h2 className={styles.menuPageTitle}>{name}</h2>
                <Image src={img} alt={name} width={400} height={760}  className={styles.img}/>
            </a>
            <div className={styles.line}></div>
        </div>
    );
}

export default MenuItem;
