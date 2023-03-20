import { useAppSelector } from '@/common/hooks/useRedux';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LogoComponent from '../../svg/LogoComponent';
import LanguageButton from './languageButton';
import styles from './navbar.module.css';
import { NavbarEN } from '@/lang/en';
import { NavbarRu } from '@/lang/ru';
import { NavBarProps } from '@/types/types';

function Navigation({
    moveToContact,
    openModalCarrer,
    openModalBooking,
    openModalDelevery,
}: NavBarProps) {
    const [nav, setNav] = useState(false);
    const lang = useAppSelector((state) => state.languageSlice.language);
    const handleCloseNav = (cb = () => {}) => {
        return () => {
            if (nav) {
                setNav(false);
            }
            cb();
        };
    };

    const currentMenu = useMemo(
        () => (lang === 'RU' ? NavbarRu : NavbarEN),
        [lang],
    );

    return (
        <div className={styles.navWrapper}>
            <div className={styles.navLogo}>
                <Link className={styles.navLink} href={'/'}>
                    <LogoComponent />
                </Link>
            </div>
            <div className={styles.navGroup}>
                <LanguageButton />
                <div
                    className={
                        nav
                            ? `${styles.navItems} ${styles.active}`
                            : styles.navItems
                    }
                >
                    {currentMenu.links.map((item, i) => {
                        return (
                            <li className={styles.navItem} key={i}>
                                {item.link === '/' && item.route ? (
                                    <Link
                                        onClick={handleCloseNav(moveToContact)}
                                        href={item.link}
                                        className={styles.menuLink}
                                    >
                                        {item.name}
                                    </Link>
                                ) : item.link === '/booking' ? (
                                    <span
                                        onClick={handleCloseNav(
                                            openModalBooking,
                                        )}
                                        className={styles.menuLink}
                                    >
                                        {item.name}
                                    </span>
                                ) : item.link === '/career' ? (
                                    <span
                                        onClick={handleCloseNav(
                                            openModalCarrer,
                                        )}
                                        className={styles.menuLink}
                                    >
                                        {item.name}
                                    </span>
                                ) : item.link === '/delivery' ? (
                                    <span
                                        onClick={handleCloseNav(
                                            openModalDelevery,
                                        )}
                                        className={styles.menuLink}
                                    >
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        onClick={handleCloseNav()}
                                        href={item.link}
                                        className={styles.menuLink}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </div>
            </div>

            <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
                {nav ? (
                    <AiOutlineClose size={25} />
                ) : (
                    <AiOutlineMenu size={25} />
                )}
            </div>
        </div>
    );
}

export default Navigation;
