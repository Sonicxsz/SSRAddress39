import { useEffect, useRef, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../common/hooks/useRedux';
import { changeMidl } from '@/store/language';
import { modalEnTitle } from '@/lang/en';
import { modalRuTitle } from '@/lang/ru';
import { closeModal, openModal } from '@/common/utils/setters';
import { setModalDelevery, setModalBooking,setMenuModal, setModalCarreer, setToContact } from '@/store/controlSlice';
export function useLayoutLogic() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const isMidl = useAppSelector((state) => state.languageSlice.middle);
    const modalBooking = useAppSelector(state => state.controlSlice.modalBooking)
    const modalCarreer = useAppSelector(state => state.controlSlice.modalCarreer)
    const modalDelevery = useAppSelector(state => state.controlSlice.modalDelevery)
    const toContact = useAppSelector(state => state.controlSlice.toContact)
    const dispatch = useAppDispatch();
    const contactsRef = useRef<HTMLInputElement>(null);
    const menuModalVisible = useAppSelector(state => state.controlSlice.menuModal.visible)

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
            dispatch(setToContact(false));
        }
    };

    const moveToContact = () => {
        dispatch(setToContact(true));
    };

    return {
        closeModal,
        openModal,
        moveToContact,
        scroll,
        modalLang,
        menuModalVisible,
        isMidl,
        contactsRef,
        toContact,
        modalBooking, 
        modalCarreer, 
        modalDelevery,
        setModalDelevery, 
        setModalBooking, 
        setModalCarreer,
        setMenuModal

    };
}
