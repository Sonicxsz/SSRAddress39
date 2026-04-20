import styles from './contacs.module.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import LogoComponent from '../../svg/LogoComponent';
import { useAppSelector } from '@/common/hooks/useRedux';
import { contactsRU } from '@/lang/ru';
import { contactsEN } from '@/lang/en';
import { ContactsProps } from '@/types/types';
import { IoCallOutline, IoTimeOutline, IoLocationOutline, IoMailOutline, IoExpandOutline, IoArrowForwardOutline, IoOpenOutline } from 'react-icons/io5';
import { BsWhatsapp } from 'react-icons/bs';

import { useState } from 'react';
import { Portal } from '@/components/ui/portalModal/portalModal';

const routes = [
    {
        id: 'vkusvill',
        src: '/assets/map/map1.jpg',
        labelRu: 'Со стороны ВкусВилл',
        labelEn: 'From VkusVill',
        descRu: 'Удобный путь через двор',
        descEn: 'Easy walk through the courtyard',
    },
    {
        id: 'wellton',
        src: '/assets/map/map2.jpg',
        labelRu: 'Со стороны ЖК Wellton Towers',
        labelEn: 'From Wellton Towers',
        descRu: 'Прямой маршрут вдоль домов',
        descEn: 'Straight along the buildings',
    },
    {
        id: 'azbuka',
        src: '/assets/map/map3.jpg',
        labelRu: 'Со стороны Азбуки Вкуса',
        labelEn: 'From Azbuka Vkusa',
        descRu: 'Через парковую зону',
        descEn: 'Through the park area',
    },
];

function Contacts({ refs }: ContactsProps) {
    const lang = useAppSelector((state) => state.languageSlice.language);
    const [imgModal, setImgModal] = useState('')
    const [activeRoute, setActiveRoute] = useState(routes[0].id)
    const defaultState = {
        center: [55.7744855, 37.471647],
        zoom: 16,
    };
    const langData = lang === 'EN' ? contactsEN : contactsRU;
    const onClose = () => setImgModal('')
    const current = routes.find((r) => r.id === activeRoute) ?? routes[0]
    const isEn = lang === 'EN'
    return (
        <>
        <div className={styles.contactsWrapper} ref={refs}>
            <div className={styles.logoBlock}>
                <LogoComponent />
            </div>

            <div className={styles.cardsGrid}>
                <a className={styles.card} href="tel:+79850390039" aria-label={isEn ? 'Call us' : 'Позвонить нам'}>
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoCallOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.phoneLabel || (isEn ? 'Phone' : 'Телефон')}</div>
                    <div className={styles.cardValue}>+ 7 (985) 039-00-39</div>
                    <span className={styles.cardLinkBadge} aria-hidden="true">
                        <IoArrowForwardOutline />
                    </span>
                </a>

                <a className={styles.card} href="https://wa.me/+79850390039" target="_blank" rel="noreferrer" aria-label={isEn ? 'Open WhatsApp' : 'Открыть WhatsApp'}>
                    <div className={`${styles.cardIcon} ${styles.cardIconAccent}`} aria-hidden="true">
                        <BsWhatsapp />
                    </div>
                    <div className={styles.cardLabel}>WhatsApp</div>
                    <div className={styles.cardValue}>+ 7 (985) 039-00-39</div>
                    <span className={styles.cardLinkBadge} aria-hidden="true">
                        <IoOpenOutline />
                    </span>
                </a>

                <a className={styles.card} href="mailto:addrest.39@mail.ru" aria-label={isEn ? 'Send email' : 'Написать e-mail'}>
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoMailOutline />
                    </div>
                    <div className={styles.cardLabel}>E-mail</div>
                    <div className={styles.cardValue}>addrest.39@mail.ru</div>
                    <span className={styles.cardLinkBadge} aria-hidden="true">
                        <IoArrowForwardOutline />
                    </span>
                </a>

                <div className={styles.card}>
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoTimeOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.worktime}</div>
                    <div className={styles.cardValue}>{langData.days} 11:00 — 00:00</div>
                </div>

                <a
                    className={`${styles.card} ${styles.cardWide}`}
                    href="https://yandex.ru/maps/?pt=37.471647,55.7744855&z=17&l=map"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={isEn ? 'Open address on Yandex Maps' : 'Открыть адрес в Яндекс.Картах'}
                >
                    <div className={styles.cardIcon} aria-hidden="true">
                        <IoLocationOutline />
                    </div>
                    <div className={styles.cardLabel}>{langData.addressTitle}</div>
                    <div className={styles.cardValue}>{langData.address}</div>
                    <span className={styles.cardLinkBadge} aria-hidden="true">
                        <IoOpenOutline />
                    </span>
                </a>
            </div>

            <div className={styles.helperWrapper}>
                <p id={'addressTarget'} className={styles.helperTitle}>
                    {isEn ? 'How to find us' : 'Как к нам пройти?'}
                </p>
                <p className={styles.helperSubtitle}>
                    {isEn
                        ? 'Choose your starting point — we will show you the route'
                        : 'Выберите ориентир — покажем удобный маршрут'}
                </p>

                <div className={styles.helperTabs} role="tablist">
                    {routes.map((r, i) => (
                        <button
                            key={r.id}
                            type="button"
                            role="tab"
                            aria-selected={activeRoute === r.id}
                            className={`${styles.helperTab} ${activeRoute === r.id ? styles.helperTabActive : ''}`}
                            onClick={() => setActiveRoute(r.id)}
                        >
                            <span className={styles.helperTabIndex}>{`0${i + 1}`}</span>
                            <span className={styles.helperTabLabel}>
                                {isEn ? r.labelEn : r.labelRu}
                            </span>
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    className={styles.helperPreview}
                    onClick={() => setImgModal(current.src)}
                    aria-label={isEn ? 'Open route in full view' : 'Открыть маршрут целиком'}
                >
                    <img
                        key={current.id}
                        src={current.src}
                        alt={isEn ? current.labelEn : current.labelRu}
                        className={styles.helperPreviewImage}
                    />
                    <span className={styles.helperPreviewBadge}>
                        <IoExpandOutline />
                    </span>
                    <div className={styles.helperPreviewCaption}>
                        <span className={styles.helperPreviewLabel}>
                            {isEn ? current.labelEn : current.labelRu}
                        </span>
                        <span className={styles.helperPreviewDesc}>
                            {isEn ? current.descEn : current.descRu}
                        </span>
                    </div>
                </button>
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
