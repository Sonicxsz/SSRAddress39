import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLayoutLogic } from '@/layout/useLayoutLogic';
import Descriptor from '@/components/ui/descriptor/descriptor';
import Corousel from '@/components/ui/carousel/carousel';
import styles from './mainPage.module.css';
import IconsBar from '@/components/ui/iconBar/iconBar';
const Contacts = dynamic(() => import('../../ui/contacts/contacs'));

import { Ribbon } from '@/components/Ribbon/Ribbon';
import RepeatOrder from '@/components/ui/repeatOrder/RepeatOrder';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function HomePage() {
    const { scroll, toContact, contactsRef } = useLayoutLogic();

    useEffect(() => {
        let timeout: any;
        if (toContact) {
            timeout = setTimeout(() => {
                scroll();
            }, 200);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [toContact]);

    return (
        <>
            <Head>
                <title>
                    Адрес39 - Главная страница ресторана:Бронирование, Доставка,
                    Контакты
                </title>

                <meta
                    name="description"
                    content="Адрес39 – это уникальное место в Москве, включающее в себя ресторан и бар. Огромное разнообразие блюд и напитков разных культур. Душевная атмосфера"
                />
                <meta
                    name="keywords"
                    content="Адрес39,ресторан,винный бар,ЖК комплекс, Wellton Park ,винные бары,ресторан в Москве,разная кухня москва,МО ресторан,лучшие блюда в Москве,детское меню,японское меню,классическое меню,доставка,самовывоз,официальный сайт ресторана Адрес39,ресторан блюда меню, бронирование стола"
                />
                <meta name="yandex-verification" content="b664a6bb74ee0f23" />
                <meta
                    name="google-site-verification"
                    content="XdcYYiQGcFglG_yHs9TA9hdTERv-SBJq1XT0Lq8Xbfc"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                <meta name="theme-color" content="#0f0f12" />

                <link
                    href="https://awards.infcdn.net/2024/circle_v2.css"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div className={styles.upperIcons}>
                    <IconsBar />
                </div>
                <motion.div
                    id="firstSection"
                    className={styles.mainContent}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                >
                    <Descriptor />

                    <div className={styles.corouselMain}>
                        <Corousel />
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                >
                    <Ribbon />
                </motion.div>
                <motion.div
                    className={styles.videoBlock}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                >
                    <RepeatOrder />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                >
                    <Contacts refs={contactsRef} />
                </motion.div>
                <div></div>
            </div>
        </>
    );
}
