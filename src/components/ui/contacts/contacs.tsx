import styles from './contacs.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import LogoComponent from '../../svg/LogoComponent';
import { useAppSelector } from '@/common/hooks/useRedux';
import { contactsRU } from '@/lang/ru';
import { contactsEN } from '@/lang/en';
import { ContactsProps } from '@/types/types';
import { Portal } from '../portalModal/Portal';
import { useState } from 'react';
function Contacts({ refs }: ContactsProps) {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const [imgModal, setImgModal] = useState('')
    const defaultState = {
        center: [55.7744855, 37.471647],
        zoom: 16,
    };
    const langData = lang === 'EN' ? contactsEN : contactsRU;
    const onClose = () => setImgModal('')
    console.log(imgModal)
    return (
        <>
        <div className={styles.contactsWrapper} ref={refs}>
            <div style={{ width: '160px' }}>
                <LogoComponent />
            </div>
            <div className={styles.contactsConnection}>
                <a className={styles.contactsNumber} href="tel:+79850390039">
                    + 7(985)039-00-39
                </a>
                <a
                    className={styles.contactsWhats}
                    href="https://wa.me/+79850390039"
                >
                    WhatsApp: + 7(985)039-00-39
                </a>
                <a
                    className={styles.contactsMail}
                    href="mailto:addrest.39@mail.ru"
                >
                    addrest.39@mail.ru
                </a>
            </div>
            <div className={styles.timeWork}>
                {langData.worktime}
                <div className={styles.timeWorkText}>
                    {langData.days} 09:00 - 00:00
                </div>
            </div>
            <div className={styles.contactsAdress}>
                {langData.addressTitle}
                <div className={styles.contactsAdressText}>
                    {langData.address}
                </div>

            </div>
            <div className={styles.helperWrapper}>
                <p>Как к нам пройти ?</p>
                <div className={styles.helper}>
                    <div className={styles.helperItem}>
                        <div onClick={() => setImgModal('/assets/map/map1.jpg')} className={styles.helperImage}>
                            <img src="/assets/map/map1.jpg" alt="1" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны ВкусВилл
                        </span>
                    </div>
                    <div className={styles.helperItem}>
                        <div onClick={() => setImgModal('/assets/map/map2.jpg')} className={styles.helperImage}>
                            <img src="/assets/map/map2.jpg" alt="1" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны ЖК Wellton Towers
                        </span>
                    </div>
                    <div className={styles.helperItem}>
                        <div onClick={() => setImgModal('/assets/map/map3.jpg')} className={styles.helperImage}>
                            <img src="/assets/map/map3.jpg" alt="1" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны Азбуки Вкуса
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.mapWrapper}>
                <YMaps>
                    <Map className={styles.map} defaultState={defaultState}>
                        <Placemark geometry={[55.774855, 37.471647]} />
                    </Map>
                </YMaps>
            </div>
        </div>

        {imgModal && (
        <Portal onClose={onClose}>

            <div className={styles.fullImage}>

                <img className='prevent' src={imgModal} alt="" />
            </div>
        </Portal>
        )}
        </>
    );
}

export default Contacts;
