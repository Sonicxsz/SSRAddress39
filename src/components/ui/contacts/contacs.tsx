import styles from './contacs.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import LogoComponent from '../../svg/LogoComponent';
import { useAppSelector } from '@/common/hooks/useRedux';
import { contactsRU } from '@/lang/ru';
import { contactsEN } from '@/lang/en';
import { ContactsProps } from '@/types/types';
import { IoCallOutline, IoTimeOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { BsWhatsapp } from 'react-icons/bs';

import { useState } from 'react';
import { Portal } from '@/components/ui/portalModal/portalModal';
function Contacts({ refs }: ContactsProps) {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const [imgModal, setImgModal] = useState('')
    const defaultState = {
        center: [55.7744855, 37.471647],
        zoom: 16,
    };
    const langData = lang === 'EN' ? contactsEN : contactsRU;
    const onClose = () => setImgModal('')
    return (
        <>
        <div className={styles.contactsWrapper} ref={refs}>
            <div className={styles.logoBlock}>
                <LogoComponent />
            </div>

            <div className={styles.cardsGrid}>
                <a className={styles.card} href="tel:+79850390039">
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoCallOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.phoneLabel || (lang === 'EN' ? 'Phone' : 'Телефон')}</div>
                    <div className={styles.cardValue}>+ 7 (985) 039-00-39</div>
                </a>

                <a className={styles.card} href="https://wa.me/+79850390039" target="_blank" rel="noreferrer">
                    <div className={`${styles.cardIcon} ${styles.cardIconAccent}`} aria-hidden="true">
                        <BsWhatsapp />
                    </div>
                    <div className={styles.cardLabel}>WhatsApp</div>
                    <div className={styles.cardValue}>+ 7 (985) 039-00-39</div>
                </a>

                <a className={styles.card} href="mailto:addrest.39@mail.ru">
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoMailOutline />
                    </div>
                    <div className={styles.cardLabel}>E-mail</div>
                    <div className={styles.cardValue}>addrest.39@mail.ru</div>
                </a>

                <div className={styles.card}>
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoTimeOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.worktime}</div>
                    <div className={styles.cardValue}>{langData.days} 11:00 — 00:00</div>
                </div>

                <div className={`${styles.card} ${styles.cardWide}`}>
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoLocationOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.addressTitle}</div>
                    <div className={styles.cardValue}>{langData.address}</div>
                </div>
            </div>

            <div className={styles.helperWrapper}>
                <p id={'addressTarget'} className={styles.helperTitle}>Как к нам пройти?</p>
                <div className={styles.helper}>
                    <button type="button" className={styles.helperItem} onClick={() => setImgModal('/assets/map/map1.jpg')}>
                        <div className={styles.helperImage}>
                            <img src="/assets/map/map1.jpg" alt="Маршрут со стороны ВкусВилл" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны ВкусВилл
                        </span>
                    </button>
                    <button type="button" className={styles.helperItem} onClick={() => setImgModal('/assets/map/map2.jpg')}>
                        <div className={styles.helperImage}>
                            <img src="/assets/map/map2.jpg" alt="Маршрут со стороны ЖК Wellton Towers" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны ЖК Wellton Towers
                        </span>
                    </button>
                    <button type="button" className={styles.helperItem} onClick={() => setImgModal('/assets/map/map3.jpg')}>
                        <div className={styles.helperImage}>
                            <img src="/assets/map/map3.jpg" alt="Маршрут со стороны Азбуки Вкуса" />
                        </div>
                        <span className={styles.helperLabel}>
                            Со стороны Азбуки Вкуса
                        </span>
                    </button>
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
                <img className='prevent' src={imgModal} alt="Маршрут" />
            </div>
        </Portal>
        )}
        </>
    );
}

export default Contacts;
