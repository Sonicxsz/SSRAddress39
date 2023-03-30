import React from "react";
import { Card } from "@/components/ui/card/card";
import { useState, useEffect } from "react";
import withMessage from "@/common/hooks/withMessage";
import Cart from "@/components/ui/cart/cart";
import CartButton from "@/components/ui/cart/cartButton";
import CardMini from "@/components/ui/card/cardMini";
import styles from './delevery.module.css';
import Up from "@/components/ui/up/up";
import { scrollTop } from "@/common/utils/fn";
import { useAppDispatch, useAppSelector } from "@/common/hooks/useRedux";
import { deleveryProps, item } from "@/types/types";
import { DeleveryLangRu } from "@/lang/ru";
import {DeleveryLangEN} from "@/lang/en";
import {filters, filter} from './data'
import { NextPage } from "next";
import { setCartModal } from "@/store/controlSlice";

interface cartFull {
	closeCartbtn: () => void
	closeCart: () => void
}



 const DeliveryPage:NextPage<deleveryProps> = ({data}: deleveryProps) => {
	const [scroll, setScroll] = useState(false);
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [clazz, setClazz] = useState(styles.filters);
	const [showUp, setShowUp] = useState(false);
	const lang = useAppSelector(state => state.languageSlice.language)
	const showCart = useAppSelector(state => state.controlSlice.modalCart)
	const deleveryLang = lang === 'EN' ? DeleveryLangEN : DeleveryLangRu
	const dispacth = useAppDispatch()
	useEffect(() =>{
		if(scroll){
			const elem = document.querySelector(`[data-name='${activeFilter}']`)
            if(elem)
			scrollToElem(elem)
			setActiveFilter(null)
		}
	}, [activeFilter])
	

	useEffect(() =>{
		let timeout: NodeJS.Timeout | null = null;
		const scrollWindow = () => {
            if(timeout)
			clearTimeout(timeout)
			timeout = setTimeout(() =>{
				if(window.scrollY > 200){
					setClazz(`${styles.filters} ${styles.filtersFixed}`) 
					setShowUp(true)
				}else{
					setClazz(styles.filters)
					setShowUp(false)
				}
			}, 120)


		}
		window.addEventListener('scroll', scrollWindow)

		return () =>{
			window.removeEventListener('scroll',scrollWindow)
		}
	}, [])

	



	
	const scrollToElem = (elem: Element) => {
		const coord = elem.getBoundingClientRect().top + window.scrollY - 60
		window.scrollTo({top: coord, behavior: 'smooth'})
		setScroll(false)
	}
	
	useEffect(() => {
		if(showCart){
			document.body.style.overflow = 'hidden'
		}else{
			document.body.style.overflow = ''
			
			
		}
	}, [showCart])

	const openCart = () =>{
		dispacth(setCartModal(true))
	}

	
	const CartFull = withMessage(Cart as () => JSX.Element, true, lang)
	

	return (
		//closeCartbtn={closeCartbtn} closeCart={closeCart}
		<div className={styles.pageWrapper}>
			 <CartButton openCart={openCart} />
			{showCart && <CartFull   />}
			<div className={styles.titleWrapper}>
				<h1 className={styles.title}>{deleveryLang.title}</h1>
				<h2>{deleveryLang.conditionsTitle}</h2>
				<h3>{deleveryLang.deleveyWelton}</h3>
				<h3>{deleveryLang.deleveryYandex} <a className={styles.link} href="https://eda.yandex.ru/moscow/r/adres_39?placeSlug=adres_39_ewrhd&utm_campaign=rest_card&utm_content=desktop&utm_medium=yp&utm_source=ymaps">{deleveryLang.yandex} </a></h3>
				<h3>{deleveryLang.conditions} + 7 (985) 039-00-39</h3>
			</div>
			<div className={clazz}>
				{filters.map((i:filter, ind) => <div onClick={() => {
					setActiveFilter(i.data)
					setScroll(true)
				}} className={styles.filtersItem} key={ind}>{i.name[lang]}</div>)}
			</div>
		
 			{data.map((i, ind) => {
				const clazz = !i.mini ? styles.itemsWrapper : `${styles.itemsWrapper} ${styles.mini}` 
				return (<div className={styles.categoryBlock} key={ind}>
				<h2 data-name={i.data}>{i.cat[lang]}</h2>
				<div className={clazz}>
				{i.mini  
				? i.items.map((i) => {
					return <CardMini count={i.count} gramm={i.grams} id={i.id} img={i.img} lang={lang}  name={i.name} price={i.price} key={i.id} />
				})
				: i.items.map((i) => {                                      
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>)
			})}
		
			<Up show={showUp} handleScroll={scrollTop}/>

		</div>
	);
}




export default DeliveryPage

 