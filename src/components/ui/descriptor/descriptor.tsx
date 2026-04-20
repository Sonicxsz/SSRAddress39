import styles from './descriptor.module.css';
import Link from 'next/link';
import { descriptorEN } from '@/lang/en';
import { descriptorRU } from '@/lang/ru';
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux';
import { setModalBooking } from '@/store/controlSlice';
import { openModal } from '../../../common/utils/setters'

function Descriptor() {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const data = lang === 'EN' ? descriptorEN : descriptorRU;
    const dispatch = useAppDispatch();


    return (
        <div className={styles.wrapperDescriptor}>
            <p>
                <span>{data.title}</span> {data.description}{' '}
            </p>
            <div className={styles.flex}>
                <button type="button" className={styles.descrButton} onClick={() => openModal(dispatch, setModalBooking)}>
                    <span className={styles.descrButtonLabel}>{data.btnBooking}</span>
                </button>
                <Link href="/delivery" className={styles.descrButton}>
                    <span className={styles.descrButtonLabel}>{data.btnDelevery}</span>
                </Link>
            </div>
        </div>
    );
}

export default Descriptor;
