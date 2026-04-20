import React from 'react'
import styles from './cartItem.module.css'
import { decItem, removeItem, incItem } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'
import { IoTrashOutline } from 'react-icons/io5'
import { HiMinus, HiPlus } from 'react-icons/hi'

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
          <img src={currentImg} alt={name}/>
        </div>
        <div className={styles.main}>
            <div className={styles.title}>{name}</div>
            <div className={styles.bottomRow}>
                <div className={styles.qty}>
                    <button
                        type="button"
                        aria-label="Decrease"
                        onClick={() => dispatch(decItem({id}))}
                        className={styles.qtyBtn}
                    >
                        <HiMinus />
                    </button>
                    <span className={styles.qtyValue}>{count}</span>
                    <button
                        type="button"
                        aria-label="Increase"
                        onClick={() => dispatch(incItem({id}))}
                        className={styles.qtyBtn}
                    >
                        <HiPlus />
                    </button>
                </div>
                <div className={styles.price}>{priceTotal} ₽</div>
            </div>
        </div>
        <button
            type="button"
            aria-label="Remove"
            onClick={() => dispatch(removeItem({id}))}
            className={styles.removeBtn}
        >
            <IoTrashOutline />
        </button>
    </div>
  )
})

export default CartItem