import { useEffect, useRef, useState } from "react";
import { useAppSelector} from "../common/hooks/useRedux";
import {modalEnTitle, } from '@/lang/en';
import { modalRuTitle } from "@/lang/ru";

type setter = (state:boolean) => void


export function useLayoutLogic() {
    const lang = useAppSelector(state => state.languageSlice.language)
	const [toContact, setToContact] = useState(false);

	const [modalCarreer, setModalCarreer] = useState(false);
	const [modalBooking, setModalBooking] = useState(false);
	
	const [modalDelevery, setModalDelevery] = useState(false);
	const [isMidl, setIsMidl] = useState(false)
	const contactsRef = useRef<HTMLInputElement>(null);

	const modalLang = lang === 'EN' ? modalEnTitle : modalRuTitle;

    useEffect(() => {
		const scroll = () => {
			const halfOfWindow = Math.floor(document.body.getBoundingClientRect().height / 2)
			const scrollY = window.scrollY
			if(scrollY >= halfOfWindow){
				setIsMidl(true)
			}
		}
		if(!isMidl){
			window.addEventListener('scroll', scroll)
		}
		return () =>{
			window.removeEventListener('scroll', scroll)
		}
	}, [])


	const scroll = () =>{
        if(contactsRef.current){
            const coord = contactsRef.current.getBoundingClientRect().top + window.scrollY
            window.scrollTo({top: coord, behavior: 'smooth'})
            setToContact(false)
        }
	}

	const moveToContact = () =>{
		setToContact(true)
	}
  
	
	const openModal = (setter:setter) => {
		setter(true)
	}
	function closeModal(setter:setter) {
		setter(false)
	}


	return {closeModal, 
		openModal, 
		moveToContact, 
		scroll, 
		modalLang, 
		modalDelevery, 
		setModalDelevery, 
		modalBooking, 
		setModalBooking,
		modalCarreer, setModalCarreer,
		toContact}
}