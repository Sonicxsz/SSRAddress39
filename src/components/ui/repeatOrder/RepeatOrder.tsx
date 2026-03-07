import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@/common/hooks/useRedux';
import { addItem } from '@/store/cartSlice';
import { setCartModal } from '@/store/controlSlice';
import { getLastOrder, SavedOrderItem } from '@/common/utils/lastOrder';
import { repeatOrderRU } from '@/lang/ru';
import { repeatOrderEN } from '@/lang/en';
import { cartRU } from '@/lang/ru';
import { cartEN } from '@/lang/en';
import { API } from '@/common/config/api';
import { item } from '@/types/types';
import styles from './repeatOrder.module.css';

interface MenuCategory {
    data: string;
    cat: { RU: string; EN: string };
    mini: boolean;
    items: item[];
}

function getBaseId(saved: SavedOrderItem): string {
    const idStr = String(saved.id);
    if (saved.variable && idStr.endsWith(saved.variable)) {
        return idStr.slice(0, -saved.variable.length);
    }
    return idStr;
}

export default function RepeatOrder() {
    const router = useRouter();
    const lang = useAppSelector(state => state.languageSlice.language);
    const dispatch = useAppDispatch();
    const totalCount = useAppSelector((state) => state.cartItemsSlice.totalCount);
    const cartItems = useAppSelector((state) => state.cartItemsSlice.items);
    const interfaceLang = lang === 'EN' ? repeatOrderEN : repeatOrderRU;
    const checkoutText = lang === 'EN' ? cartEN.goToCheckout : cartRU.goToCheckout;

    const [availableItems, setAvailableItems] = useState<SavedOrderItem[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const lastOrder = getLastOrder();
        if (!lastOrder || lastOrder.length === 0) {
            setLoaded(true);
            return;
        }

        fetch(API.items)
            .then(res => res.json())
            .then((categories: MenuCategory[]) => {
                if (!Array.isArray(categories)) return;

                const menuItemsMap = new Map<string, item>();
                for (const cat of categories) {
                    if (!cat.items) continue;
                    for (const menuItem of cat.items) {
                        menuItemsMap.set(String(menuItem.id), menuItem);
                    }
                }

                const validated = lastOrder.filter(saved => {
                    const baseId = getBaseId(saved);
                    const menuItem = menuItemsMap.get(baseId);
                    if (!menuItem) return false;

                    if (saved.variable && menuItem.modifier) {
                        const availableModifiers = [
                            ...(menuItem.modifier.RU || []),
                            ...(menuItem.modifier.EN || []),
                        ];
                        return availableModifiers.includes(saved.variable);
                    }

                    return true;
                });

                setAvailableItems(validated.slice(0, 4));
            })
            .catch((err) => {
                console.error('RepeatOrder:', err);
                setAvailableItems([]);
            })
            .finally(() => {
                setLoaded(true);
            });
    }, []);

    if (!loaded || availableItems.length === 0) return null;

    const handleAddOne = (item: SavedOrderItem) => {
        dispatch(addItem({
            img: item.img,
            name: item.name,
            variable: item.variable,
            price: item.price,
            id: item.id,
            count: 1,
        }));
    };

    const handleAddAll = () => {
        availableItems.forEach(item => handleAddOne(item));
    };

    const handleCheckout = () => {
        if (router.pathname !== '/delivery') router.push('/delivery');
        dispatch(setCartModal(true));
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.icon}>
                        <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4v6h6M23 20v-6h-6" stroke="#ac6c4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="#ac6c4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <h2 className={styles.title}>{interfaceLang.title}</h2>
                        <div className={styles.subtitle}>
                            {interfaceLang.subtitle}
                        </div>
                    </div>
                </div>
                {availableItems.length > 1 && (
                    <div
                        className={styles.addAllBtnWrap}
                        data-hidden={availableItems.every((item) =>
                            cartItems.some((ci) => String(ci.id) === String(item.id))
                        )}
                    >
                        <button className={styles.addAllBtn} onClick={handleAddAll}>
                            {interfaceLang.addAll}
                        </button>
                    </div>
                )}
            </div>
            <div className={styles.cards}>
                {availableItems.map((item) => {
                    const displayName = item.variable
                        ? `${item.name[lang]} ${item.variable}`
                        : item.name[lang];
                    const imgSrc = item.img && item.img.length > 0 ? item.img : '/assets/plug/1.jpg';
                    const isInCart = cartItems.some((ci) => String(ci.id) === String(item.id));

                    return (
                        <div className={styles.card} key={String(item.id)}>
                            <img
                                className={styles.cardImage}
                                src={imgSrc}
                                alt={displayName}
                            />
                            <div className={styles.cardBody}>
                                <div className={styles.cardName}>{item.name[lang]}</div>
                                {item.variable && (
                                    <div className={styles.cardVariable}>{item.variable}</div>
                                )}
                                <div className={styles.cardBottom}>
                                    <span className={styles.cardPrice}>{item.price} ₽</span>
                                    <div
                                        className={styles.cardAddBtnWrap}
                                        data-hidden={isInCart}
                                    >
                                        <button
                                            className={styles.cardAddBtn}
                                            onClick={() => handleAddOne(item)}
                                            title={interfaceLang.addOne}
                                            disabled={isInCart}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className={styles.checkoutBtnWrap}
                data-hidden={(totalCount ?? 0) === 0}
            >
                <button
                    className={styles.checkoutBtn}
                    onClick={handleCheckout}
                    type="button"
                >
                    {checkoutText}
                </button>
            </div>
        </div>
    );
}
