import { useAppSelector } from '@/common/hooks/useRedux';
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
    clearCart,
    cart = false,
}: messageProps) {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const interfaceLang = lang === 'RU' ? messageRu : messageEn;

    return (
        <div className={styles.messageWrapper}>
            <div className={styles.bookWrapper}>
                <div className={styles.bookLabel}>
                    {!loading && (
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
                                    if (cart && clearCart) {
                                        clearCart();
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
