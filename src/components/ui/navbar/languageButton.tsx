import { useState, useRef } from 'react';
import { useOnClickOutside } from '@/common/hooks/useOutsideClick';
import { changeLanguage } from '../../../store/language';
import { useAppSelector, useAppDispatch } from '@/common/hooks/useRedux';
import styles from './navbar.module.css';

function LanguageButton() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const [showLang, setShowLang] = useState(false);

    const languages = ['EN', 'RU'];
    const ref = useRef(null);
    const dispatch = useAppDispatch();

    const handleChangeLang = (lang: string) => {
        return () => dispatch(changeLanguage(lang));
    };

    const hangleCloseLang = (e: Event) => {
        const target = e.target as HTMLDivElement;
        const dataAttr = target.getAttribute('data-id');
        if (dataAttr) return;
        else {
            setShowLang(false);
        }
    };

    const handleOpenLang = () => {
        setShowLang(!showLang);
    };

    useOnClickOutside(ref, hangleCloseLang);

    return (
        <div onClick={handleOpenLang} className={styles.navLangButton}>
            <div data-id="1" className={styles.navLangButtonActive}>
                {lang}
            </div>
            {showLang &&
                languages.map((i, ind) => {
                    return (
                        i !== lang && (
                            <div
                                ref={ref}
                                className="nav-lang-button__active option"
                                onClick={handleChangeLang(i)}
                                key={ind}
                            >
                                {i}
                            </div>
                        )
                    );
                })}
        </div>
    );
}

export default LanguageButton;
