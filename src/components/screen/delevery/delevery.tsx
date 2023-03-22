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


import {filters, dessertsArray, 
	noodlesArray, souosArray, 
	fishSeafood, snacksArray, 
	meatPoultry, sideDishesArray, 
	brusshettaArray, childrenMenuArray, 
	rawbarArray, saladsArray, 
	pastaArray,rollArray, lentenArray,
	sushiArray, breakfastArray, categories} from './data'
import { useAppSelector } from "@/common/hooks/useRedux";


	interface cartFull {
		closeCartbtn: () => void
		closeCart: () => void
	}



 function DeliveryPage() {
	const [showCart, setShowCart] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [activeFilter, setActiveFilter] = useState<string | null>(null);
	const [clazz, setClazz] = useState('delivery-filters');
	const [showUp, setShowUp] = useState(false);
	const lang = useAppSelector(state => state.languageSlice.language)


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

			
			
		
			
			<div className="delevery-category-block">
				<h2 data-name="breakfast">{categories.breakfast[lang]}</h2>
				<div className="delivery-items-wrapper">
				{breakfastArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name="lenten">{categories.lenten[lang]}</h2>
				<div className="delivery-items-wrapper">
				{lentenArray.map((i) => {
					return <Card modifier={i.modifier && i.modifier} lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name="rawbar">{categories.rowbar[lang]}</h2>
				<div className="delivery-items-wrapper">
				{rawbarArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block ">
				<h2 data-name='susi'>{categories.sushi[lang]}</h2>
				<div className="delivery-items-wrapper mini">
				{sushiArray.map((i) => {
					return <CardMini lang={lang} gramm={i.grams}  count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			<div className="delevery-category-block ">
				<h2 data-name='roll'>{categories.rolls[lang]}</h2>
				<div className="delivery-items-wrapper mini">
				{rollArray.map((i) => {
					return <CardMini lang={lang} gramm={i.grams} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='snacks'>{categories.snacks[lang]}</h2>
				<div className="delivery-items-wrapper">
				{snacksArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='salads'>{categories.salads[lang]}</h2>
				<div className="delivery-items-wrapper">
				{saladsArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='brusshetta'>{categories.bruschetta[lang]}</h2>
				<div className="delivery-items-wrapper">
				{brusshettaArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='soap'>{categories.soups[lang]}</h2>
				<div className="delivery-items-wrapper">
				{souosArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			
			<div className="delevery-category-block">
				<h2 data-name='pasta'>{categories.pastaandrisotta[lang]}</h2>
				<div className="delivery-items-wrapper">
				{pastaArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='noodles'>{categories.noodles[lang]}</h2>
				<div className="delivery-items-wrapper">
				{noodlesArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			

			<div className="delevery-category-block">
				<h2 data-name='fishSeafood'>{categories.fishandseafood[lang]}</h2>
				<div className="delivery-items-wrapper">
				
				{fishSeafood.map((i) => {
				
					return <Card lang={lang} modifier={i.modifier && i.modifier} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='meatPoultry'>{categories.meatandpoultry[lang]}</h2>
				<div className="delivery-items-wrapper">
				{meatPoultry.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			
			
		
			
			<div className="delevery-category-block ">
				<h2 data-name='sideDishes'>{categories.sidedishes[lang]}</h2>
				<div className="delivery-items-wrapper mini">
				{sideDishesArray.map((i) => {
					return <CardMini lang={lang} gramm={i.grams} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>			
			
			<div className="delevery-category-block">
				<h2 data-name='desserts'>{categories.deserts[lang]}</h2>
				<div className="delivery-items-wrapper">
				{dessertsArray.map((i) => {
					return <Card lang={lang} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img} />;
				})}
				</div>
			</div>
			<div className="delevery-category-block">
				<h2 data-name='children'>{categories.childrens[lang]}</h2>
				<div className="delivery-items-wrapper">
				{childrenMenuArray.map((i) => {
					return <Card lang={lang} modifier={i.modifier && i.modifier} gramm={i.grams} title={i.title[lang]} count={i.count} key={i.id} id={i.id} name={i.name} price={i.price} img={i.img}  />;
				})}
				</div>
			</div>
			<Up show={showUp} handleScroll={scrollTop}/>

		</div>
	);
}


export default DeliveryPage

 