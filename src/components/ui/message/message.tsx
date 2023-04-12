import { useAppSelector, useAppDispatch } from '@/common/hooks/useRedux';
import { clearCart } from '@/store/cartSlice';
import { setCartModal } from '@/store/controlSlice';
import { messageProps } from '../../../types/types';
import LogoComponent from '../../svg/LogoComponent';
import styles from './message.module.css';
import Link from 'next/link';
import { messageEn } from '@/lang/en';
import { messageRu } from '@/lang/ru';

function Message({
    message,
    Icon,
    loading,
    cart = false,
}: messageProps) {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const dispacth = useAppDispatch()
    const interfaceLang = lang === 'RU' ? messageRu : messageEn;
   
    return (
        <div className={styles.messageWrapper}>
            <div className={styles.bookWrapper}>
                <div className={styles.bookLabel}>
                    { (
                        <>
                            <span>{interfaceLang.status} </span>
                            <span className={`${styles.logo} ${styles.black}`}>
                                <LogoComponent color="black" />
                            </span>
                        </>
                    )}
                </div>
                <div className={styles.messageFlex}>
               
                    <Icon size={50} />
                    <div className={styles.messageText}>{message}</div>
                
            </div>
            
                {!loading && (
                    <div className={styles.messageBtn}>
                        <Link href={'/'}>
                            <button
                                onClick={() => {
                                    if (cart) {
                                        dispacth(clearCart());
                                        dispacth(setCartModal(false))
                                    }
                                }}
                            >
                                {interfaceLang.backBtn}
                            </button>
                        </Link>
                    </div>
                )}
        </div>
        </div>
    );
}

export default Message;
