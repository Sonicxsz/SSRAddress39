import { CiShoppingCart } from 'react-icons/ci';
import { useAppSelector } from '@/common/hooks/useRedux';
import styles from './cart.module.css';
import { CartButtonProps } from '../../types/types';

function CartButton({ openCart }: CartButtonProps) {
    const count = useAppSelector((state) => state.cartItemsSlice.totalCount);
    const clazz = `${styles.cartButton} ${count && styles.showCartBtn}`;

    return (
        <div onClick={openCart} className={clazz}>
            <CiShoppingCart />
            <div className={styles.cartInfo}>{count}</div>
        </div>
    );
}

export default CartButton;
