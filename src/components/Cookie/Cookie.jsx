import { Portal } from '../ui/portalModal/portalModal';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/common/hooks/useRedux';
import css from './style.module.css';

const TEXT = {
    RU: {
        message: 'Пользуясь сайтом, вы соглашаетесь с использованием',
        cookies: 'cookies',
        and: 'и',
        terms: 'политикой конфиденциальности',
        accept: 'Принять',
    },
    EN: {
        message: 'By using this site, you agree to the use of',
        cookies: 'cookies',
        and: 'and',
        terms: 'privacy policy',
        accept: 'Accept',
    },
};

export const Cookie = () => {
    const [state, setState] = useState(false);
    const lang = useAppSelector((s) => s.languageSlice.language);
    const t = TEXT[lang] || TEXT.RU;

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage?.getItem('cookie')) {
            setState(true);
        }
    }, []);

    const onClick = () => {
        setState(false);
        localStorage?.setItem('cookie', 'accept');
    };

    if (!state) return null;

    return (
        <Portal overlayOff onClose={() => {}}>
            <div
                className={css.wrapper}
                role="dialog"
                aria-live="polite"
                aria-label="Cookie notice"
            >
                <div className={css.icon} aria-hidden="true">
                    🍪
                </div>
                <div className={css.body}>
                    <p className={css.text}>
                        {t.message}{' '}
                        <Link className={css.link} href={'/Cookies'}>
                            {t.cookies}
                        </Link>{' '}
                        {t.and}{' '}
                        <Link className={css.link} href={'/Terms'}>
                            {t.terms}
                        </Link>
                        .
                    </p>
                    <div className={css.actions}>
                        <button
                            className={css.accept}
                            onClick={onClick}
                            type="button"
                        >
                            {t.accept}
                        </button>
                    </div>
                </div>
            </div>
        </Portal>
    );
};
