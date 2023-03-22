import React from 'react'
import styles from './cartItem.module.css'
import { decItem, removeItem, incItem } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'



export interface CartItemProps { 
    img: string,
    name: string,
    count: number,
    price: number,
    id: number
}

// eslint-disable-next-line react/display-name
const CartItem = React.memo(function({img, name, count=1, price, id}:CartItemProps) {
   const priceTotal = count * price
   const dispatch = useDispatch()
   const currentImg = img.length > 0 ? img : '/assets/plug/1.jpg';
  return (
    <div className={styles.wrapper}>
        <div className={styles.thumb}>
          <img src={currentImg} alt='image2'/>
        </div>
        <div className={styles.main}>
            <div className={styles.title}>{name}</div>
            <div className={styles.count}>
                <button onClick={() => {dispatch(decItem({id}))}} className={styles.button}>-</button>
                <input readOnly value={count} type="number" className={styles.input}/>
                <button onClick={() => {dispatch(incItem({id}))}} className={styles.button}>+</button>
                <div className={styles.price}>{priceTotal} ₽</div>
            </div>
           
        </div>
        <button onClick={() => dispatch(removeItem({id}))} className={styles.button}>X</button>

    </div>
  )
})

export default CartItem