import { Portal } from '../ui/portalModal/portalModal';
import { useEffect, useState } from 'react';

import css from './style.module.css'
import Link from 'next/link';
export const Cookie = () => {
    const [state, setState] = useState(false)


    useEffect(() => {
        if(typeof window !== 'undefined' && !localStorage?.getItem('cookie')) {
            setState(true)
        }
    }, []);

    const onClick = () => {
        setState(false)
        localStorage?.setItem('cookie', 'accept')
    }

    if(!state) return null


    return (
        <Portal overlayOff  onClose={() => {}}>
            <div className={css.wrapper}>
                <div> Пользуясь сайтом, вы соглашаетесь с использованием <Link className={css.link} href={'/Cookies'}>cookies</Link> и <Link className={css.link} href={'/Terms'}>политикой конфиденциальности.</Link></div>
                <button onClick={onClick}>Хорошо</button>
            </div>
        </Portal>
    )

}