import { addItem, incItem, decItem, removeItem } from '../../../store/cartSlice';
import { CardBase } from '@/types/types';
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux';
import { cardInterfaceRU } from '../../../lang/ru';
import { cardInterfaceEN } from '../../../lang/en';
import styles from './card.module.css';

function CardMini({ name, count, price, id, img, gramm, lang }: CardBase) {
    const dispatch = useAppDispatch();
    const interfaceLang = lang === 'RU' ? cardInterfaceRU : cardInterfaceEN;

    const cartItem = useAppSelector(state =>
        state.cartItemsSlice.items.find(item => item.id === id)
    );
    const cartCount = cartItem?.count || 0;

    const handleAdd = () => {
        dispatch(addItem({ img, name, price, id, count }));
    };

    const handleInc = () => {
        dispatch(incItem({ id }));
    };

    const handleDec = () => {
        if (cartCount <= 1) {
            dispatch(removeItem({ id }));
        } else {
            dispatch(decItem({ id }));
        }
    };

    return (
        <div className={`${styles.cardMiniWrapper}`}>
            <div className={styles.cardMiniName}>
                {name[lang]}{' '}
                <span>
                    {gramm}
                    {interfaceLang.grams}
                </span>
            </div>
            <div className={styles.cardMiniControl}>
                <span>{price} ₽</span>
                {cartCount > 0 ? (
                    <div className={`${styles.quantityControl} ${styles.quantityControlMini}`}>
                        <button
                            className={styles.quantityBtn}
                            onClick={handleDec}
                        >
                            &minus;
                        </button>
                        <span className={styles.quantityValue}>{cartCount}</span>
                        <button
                            className={styles.quantityBtn}
                            onClick={handleInc}
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleAdd}
                        className={`${styles.deliveryItemButton} ${styles.miniCardButton}`}
                    >
                        {interfaceLang.addbtn}
                    </button>
                )}
            </div>
        </div>
    );
}

export default CardMini;
