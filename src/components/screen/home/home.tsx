import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLayoutLogic } from '@/layout/useLayoutLogic';
import Descriptor from '@/components/ui/descriptor/descriptor';
import Corousel from '@/components/ui/carousel/carousel';
import MainMenu from '@/components/ui/MenuBlock/MenuBlock';
import styles from './mainPage.module.css';
import NewsBar from '@/components/ui/newsBar/NewsBar';
const Contacts = dynamic(() => import('../../ui/contacts/contacs'));


export default function HomePage() {
    const { scroll, toContact, contactsRef } = useLayoutLogic();
    const [arrow, setArrow] = useState(false)
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
                <title>Адрес39 - Главная страница ресторана:Бронирование, Доставка, Контакты</title>
                
                <meta name="description" 
                    content='Адрес39 – это уникальное место в Москве, включающее в себя ресторан и бар. Огромное разнообразие блюд и напитков разных культур. Душевная атмосфера'
                />
                <meta name='keywords' 
                    content="Адрес39,ресторан,винный бар,ЖК комплекс, Wellton Park ,винные бары,ресторан в Москве,разная кухня москва,МО ресторан,лучшие блюда в Москве,детское меню,японское меню,классическое меню,доставка,самовывоз,официальный сайт ресторана Адрес39,ресторан блюда меню, бронирование стола"
                />
                <meta name="yandex-verification" content="b664a6bb74ee0f23" />
                <meta name="google-site-verification" content="XdcYYiQGcFglG_yHs9TA9hdTERv-SBJq1XT0Lq8Xbfc" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
               

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div id='firstSection' className={styles.mainContent}>
                    <Descriptor />
                    <div className={styles.corouselMain}>
                        <Corousel />
                    </div>
                    
                </div>
               
                <div>
                    <MainMenu />
                </div>
               
                <Contacts refs={contactsRef} />
                <div>
                </div>
            </div>
        </>
    );
}