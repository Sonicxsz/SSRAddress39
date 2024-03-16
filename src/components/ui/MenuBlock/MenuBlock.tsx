import { useAppSelector } from '@/common/hooks/useRedux';
import Link from 'next/link';
import styles from './menuBlock.module.css';
import { useEffect } from 'react';
function MainMenu() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const langMenu = lang === 'EN' ? 'Open full menu' : 'Открыть полное меню';
    useEffect(() => {}, []);
    return (
        <div className={styles.mainMenuWrapper}>
            <div className={styles.mainMenuItem}>
                {/* <Image
                    className={styles.img}
                    width={1600}
                    height={1200}
                    src="/assets/menu/menuimg.jpg"
                    alt="Imagdwadaw"
                /> */}
            </div>
            <Link href={'/menuPage'}>
                <button className={styles.mainMenuBtn}>{langMenu}</button>
            </Link>
        </div>
    );
}

export default MainMenu;
