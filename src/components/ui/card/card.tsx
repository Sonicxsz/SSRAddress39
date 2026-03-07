import { useState, useEffect } from 'react';
import { addItem, incItem, decItem, removeItem } from '../../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { cardInterfaceEN } from '../../../lang/en';
import { cardInterfaceRU } from '../../../lang/ru';
import Image from 'next/image';
import { CardProps } from '@/types/types';
import { useAppSelector } from '@/common/hooks/useRedux';
import styles from './card.module.css';

export function Card({
    img,
    name,
    price,
    count,
    id,
    gramm,
    title,
    modifier,
    lang,
}: CardProps) {
    const [showTitle, setShowTitle] = useState(false);
    const [variable, setVariable] = useState<string | null>(null);
    const dispatch = useDispatch();
   
    useEffect(() => {
        if (modifier) {
            setVariable(modifier[lang][0]);
        }
    }, []);

    const cartId = variable ? id + variable : id;
    const cartItem = useAppSelector(state =>
        state.cartItemsSlice.items.find(item => item.id === cartId)
    );
    const cartCount = cartItem?.count || 0;

    const currentLang = lang === 'RU' ? cardInterfaceRU : cardInterfaceEN;

    const handleAdd = () => {
        dispatch(addItem({ img, name, variable, price, id: cartId, count }));
    };

    const handleInc = () => {
        dispatch(incItem({ id: cartId }));
    };

    const handleDec = () => {
        if (cartCount <= 1) {
            dispatch(removeItem({ id: cartId }));
        } else {
            dispatch(decItem({ id: cartId }));
        }
    };

    return (
        <div className={styles.deliveryItem}>
            <div className={styles.deliveryItemImage}>
                {img.length > 0 ? (
                    <Image
                        width={400}
                        height={300}
                        className={styles.deliveryItemImage}
                        key={id}
                        src={img}
                        alt={title}
                    />
                ) : (
                    <Image
                        width={400}
                        height={300}
                        className={styles.deliveryItemImage}
                        key={id}
                        src="/assets/plug/1.jpg"
                        alt={title}
                    />
                )}
            </div>
            <div className={styles.deleveryContentWrapper}>
                <div className={styles.deleveryItemDescription}>
                    {name[lang]}
                </div>
                <div className={styles.deleveryItemGroupInfo}>
                    <div
                        className={
                            showTitle
                                ? `${styles.titleButton} ${styles.titleButtonActive}`
                                : styles.titleButton
                        }
                        onClick={() => {
                            setShowTitle(!showTitle);
                        }}
                    >
                        {currentLang.description}
                    </div>
                    {modifier && (
                        <select
                            className={styles.itemModifier}
                            onChange={(e) => setVariable(e.target.value)}
                        >
                            {modifier[lang].map((i, ind) => (
                                <option value={i} key={ind}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <div
                    className={
                        showTitle
                            ? `${styles.title} ${styles.titleActive}`
                            : styles.title
                    }
                >
                    <span>{currentLang.composition}: </span> {title}
                </div>

                <div className={styles.deleveryContentGroup}>
                    <p className={styles.deleveryItemPrice}>
                        {price} {currentLang.currency}
                    </p>
                    <span className={styles.deleveryItemGramm}>
                        {' '}
                        {gramm}
                        {currentLang.grams}
                    </span>
                </div>

                {cartCount > 0 ? (
                    <div className={styles.quantityControl}>
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
                        className={styles.deliveryItemButton}
                    >
                        {currentLang.addbtn}
                    </button>
                )}
            </div>
        </div>
    );
}
