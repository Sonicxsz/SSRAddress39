import {useState, useEffect} from "react";
import { addItem } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import {cardInterfaceEN} from '../../lang/en'
import {cardInterfaceRU} from '../../lang/ru'
import Image from "next/image";
import { CardProps } from "@/types/types";
import styles from '../../styles/card.module.css'


export function Card({
	img, 
	name,
	price,
	count,
	id,
	gramm,
	title, 
	modifier,
	lang
}: CardProps){
	const [showTitle, setShowTitle] = useState(false)
	const [variable, setVariable] = useState<string | null>(null)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if(modifier){
			setVariable(modifier[lang][0])
		}
	}, [])


	const currentLang = lang === 'RU' ? cardInterfaceRU : cardInterfaceEN

	return (
		<div className={styles.deleveryItem}>
		<div className={styles.deleveryItemImage}>
			{img.length > 0 ?
			<Image width={100}  className={styles.deleveryItemImage} key={id} src={img}  alt={title}/>
			:
			<Image width={100} className={styles.deleveryItemImage} key={id}  src='assets/plug/1.jpg'  alt={title}/> 
	

}
			</div>
			<div className={styles.deleveryContentWrapper}>
			<div className={styles.deleveryItemDescription}>{name[lang]}</div>
			<div className={styles.deleveryItemGroupInfo}>
				
				<div className={showTitle ? `${styles.titleButton} ${styles.titleButtonActive}` : styles.titleButton} onClick={() => {setShowTitle(!showTitle)}}>{currentLang.description}</div>
				{modifier && <select className={styles.itemModifier} onChange={(e) => setVariable(e.target.value)}> 
						{modifier[lang].map((i, ind) =>  <option  value={i} key={ind}>{i}</option>)}
				</select>}
			</div>
			<div className={showTitle ? `${styles.title} ${styles.titleActive}` : styles.title}><span>{currentLang.composition}: </span> {title}</div>
			
					<div className={styles.deleveryContentGroup}>
						<p className={styles.deleveryItemPrice}>{price} {currentLang.currency}</p>
						<span className={styles.deleveryItemGramm}> {gramm}{currentLang.grams}</span>
					</div>
				
				<button onClick={() => {dispatch(addItem({img, name, variable, price, id: variable && id + variable, count}))}} className="delivery-item-button">{currentLang.addbtn}</button>
			</div>
			</div>
		
	);
}
