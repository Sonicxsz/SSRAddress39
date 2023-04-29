import styles from './descriptor.module.css';
import { descriptorEN } from '@/lang/en';
import { descriptorRU } from '@/lang/ru';
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux';
import { setModalDelevery, setModalBooking } from '@/store/controlSlice';
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
                <button className={styles.descrButton} onClick={() => openModal(dispatch, setModalBooking)}>
                    <span className="menu-link">{data.btnBooking}</span>
                </button>
                <button className={styles.descrButton} onClick={() => openModal(dispatch, setModalDelevery)}>
                    {data.btnDelevery}
                </button>
            </div>
        </div>
    );
}

export default Descriptor;
