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
import { useAppSelector } from "@/common/hooks/useRedux";
import { deleveryProps, item } from "@/types/types";

import {filters,  categories} from './data'
import { GetStaticProps, NextPage } from "next";


	interface cartFull {
		closeCartbtn: () => void
		closeCart: () => void
	}



 const DeliveryPage:NextPage<deleveryProps> = ({data}: deleveryProps) => {
	console.log(data)
	
	const [showCart, setShowCart] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [clazz, setClazz] = useState('delivery-filters');
	const [showUp, setShowUp] = useState(false);
	const lang = useAppSelector(state => state.languageSlice.language)


	// const {dessertsArray, 
	// 	noodlesArray, souosArray, 
	// 	fishSeafood, snacksArray, 
	// 	meatPoultry, sideDishesArray, 
	// 	brusshettaArray, childrenMenuArray, 
	// 	rawbarArray, saladsArray, 
	// 	pastaArray,rollArray, lentenArray,
	// 	sushiArray, breakfastArray,} = data
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
					setClazz('delivery-filters delevery-filters-fixed') 
					setShowUp(true)
				}else{
					setClazz('delivery-filters')
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
	setShowCart(true)
	}

	const closeCart = (e:Event) => {
    if(e.target instanceof Element)
	if(e.target.className === 'cart-background'){
		setShowCart(false)
	}
	}

	const closeCartbtn = () => {
	    setShowCart(false)
	}

	const CartFull = withMessage(Cart as () => JSX.Element, true, lang)
	const deleveryLang = {
		'RU': {
			title: "Меню доставки",
			conditionsTitle: "Условия доставки:",
			deleveyWelton: "Доставка по ЖК Wellton park бесплатная",
			deleveryYandex: "Доставка по Москве и МО осуществляется сервисом",
			conditions: "Условия уточняйте по телефону ресторана",
			yandex: 'Яндекс еда'
			
		},
		'EN': {
			title: "Delivery menu",
			conditionsTitle: "Delivery terms:",
			deleveyWelton: "Wellton park residential delivery free",
			deleveryYandex: "Delivery in Moscow and Moscow region is carried out by the service",
			conditions: "Check terms and conditions by phone",
			yandex: 'Yandex Food'
		}
	}

	return (
		//closeCartbtn={closeCartbtn} closeCart={closeCart}
		<div className="delivery-page-wrapper">
			 <CartButton openCart={openCart} />
			{showCart && <CartFull   />}
			<div className="delivery-title-wrapper">
				<h1 className="delivery-title">{deleveryLang[lang].title}</h1>
				<h2>{deleveryLang[lang].conditionsTitle}</h2>
				<h3>{deleveryLang[lang].deleveyWelton}</h3>
				<h3>{deleveryLang[lang].deleveryYandex} <a className="delevery-link" href="https://eda.yandex.ru/moscow/r/adres_39?placeSlug=adres_39_ewrhd&utm_campaign=rest_card&utm_content=desktop&utm_medium=yp&utm_source=ymaps">{deleveryLang[lang].yandex} </a></h3>
				<h3>{deleveryLang[lang].conditions} + 7 (985) 039-00-39</h3>
			</div>
			<div className={clazz}>
				
				{filters.map((i, ind) => <div onClick={() => {
					setActiveFilter(i.data)
					setScroll(true)
					}} className="filters-item " key={ind}>{i.name[lang]}</div>)}

			</div>

			
			
		
 			{data.map((i, ind) => {
				return (<div className={styles.categoryBlock} key={ind}>
				<h2 data-name={i.data}>{i.cat[lang]}</h2>
				<div className="delivery-items-wrapper">
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

 