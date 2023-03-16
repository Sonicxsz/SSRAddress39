import { addItem } from "../../store/cartSlice";
import { CardBase } from '@/types/types';
import { useAppDispatch } from '@/common/hooks/useRedux';
import {cardInterfaceRU} from '../../lang/ru'
import {cardInterfaceEN} from '../../lang/en'
import styles from '../../styles/card.module.css'


function CardMini({name, count, price,  id, img, gramm, lang}:CardBase) {
  const dispatch = useAppDispatch()
  const interfaceLang = lang === 'RU' ? cardInterfaceRU : cardInterfaceEN


  return (
    <div className={styles.cardMiniWrapper}>
        <div className={styles.cardMiniName}>{name[lang]} <span>{gramm}{interfaceLang.grams}</span></div>
       <div className={styles.cardMiniControl}>
        <span>{price} ₽</span>
        <button onClick={() => {dispatch(addItem({img, name, price, id, count}))}} className={`${styles.deleveryItemButton} ${styles.miniCardButton}`}>{interfaceLang.addbtn}</button>
       </div>
    </div>
  )
}

export default CardMini