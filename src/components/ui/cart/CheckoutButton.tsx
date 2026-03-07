import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@/common/hooks/useRedux';
import { setCartModal } from '@/store/controlSlice';
import { cartRU } from '@/lang/ru';
import { cartEN } from '@/lang/en';
import styles from './checkoutButton.module.css';

export default function CheckoutButton() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const totalCount = useAppSelector((state) => state.cartItemsSlice.totalCount);
    const lang = useAppSelector((state) => state.languageSlice.language);
    const text = lang === 'EN' ? cartEN.goToCheckout : cartRU.goToCheckout;

    if (!totalCount) return null;

    const handleClick = () => {
        if (router.pathname !== '/delivery') {
            router.push('/delivery');
        }
        dispatch(setCartModal(true));
    };

    return (
        <button
            className={styles.checkoutBtn}
            onClick={handleClick}
            type="button"
        >
            {text}
        </button>
    );
}
