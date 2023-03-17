import { useAppSelector } from '@/common/hooks/useRedux';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/menuBlock.module.css';

function MainMenu() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const langMenu = lang === 'EN' ? 'Open full menu' : 'Открыть полное меню';

    return (
        <div className={styles.mainMenuWrapper}>
            <div className={styles.mainMenuItem}>
                <Image
                    className={styles.img}
                    width={1600}
                    height={1600}
                    src="/assets/menu/1.webp"
                    alt="Imagdwadaw"
                />
            </div>
            <Link href={'/menu'}>
                <button className={styles.mainMenuBtn}>{langMenu}</button>
            </Link>
        </div>
    );
}

export default MainMenu;
