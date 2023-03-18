import { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../common/hooks/useRedux';
import { changeMidl } from '@/store/language';
import { modalEnTitle } from '@/lang/en';
import { modalRuTitle } from '@/lang/ru';
import { closeModal, openModal } from '@/common/utils/setters';

export function useLayoutLogic() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const isMidl = useAppSelector((state) => state.languageSlice.middle);
    const {modalBooking, modalCarreer, modalDelevery} = useAppSelector(state => state.controlSlice)
    const dispatch = useAppDispatch();
    const [toContact, setToContact] = useState(false);


    const contactsRef = useRef<HTMLInputElement>(null);

    const modalLang = lang === 'EN' ? modalEnTitle : modalRuTitle;

    useEffect(() => {
        const scroll = () => {
            const halfOfWindow = Math.floor(
                document.body.getBoundingClientRect().height / 2,
            );
            const scrollY = window.scrollY;
            if (scrollY >= halfOfWindow) {
                dispatch(changeMidl(true));
            }
        };
        if (!isMidl) {
            window.addEventListener('scroll', scroll);
        }
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const scroll = () => {
        if (contactsRef.current) {
            const coord =
                contactsRef.current.getBoundingClientRect().top +
                window.scrollY;
            window.scrollTo({ top: coord, behavior: 'smooth' });
            setToContact(false);
        }
    };

    const moveToContact = () => {
        setToContact(true);
    };

    return {
        closeModal,
        openModal,
        moveToContact,
        scroll,
        modalLang,  
        isMidl,
        contactsRef,
        toContact,
    };
}
