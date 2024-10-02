import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLayoutLogic } from '@/layout/useLayoutLogic';
import Descriptor from '@/components/ui/descriptor/descriptor';
import Corousel from '@/components/ui/carousel/carousel';
import styles from './mainPage.module.css';
import IconsBar from '@/components/ui/iconBar/iconBar';
const Contacts = dynamic(() => import('../../ui/contacts/contacs'));
import {createPortal} from 'react-dom';
import { UpperContacts } from '@/components/ui/upperContacts/UpperContacts';
import { Ribbon } from '@/components/Ribbon/Ribbon';
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
                      content="Адрес39 – это уникальное место в Москве, включающее в себя ресторан и бар. Огромное разнообразие блюд и напитков разных культур. Душевная атмосфера"
                />
                <meta name="keywords"
                      content="Адрес39,ресторан,винный бар,ЖК комплекс, Wellton Park ,винные бары,ресторан в Москве,разная кухня москва,МО ресторан,лучшие блюда в Москве,детское меню,японское меню,классическое меню,доставка,самовывоз,официальный сайт ресторана Адрес39,ресторан блюда меню, бронирование стола"
                />
                <meta name="yandex-verification" content="b664a6bb74ee0f23" />
                <meta name="google-site-verification" content="XdcYYiQGcFglG_yHs9TA9hdTERv-SBJq1XT0Lq8Xbfc" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link href="https://awards.infcdn.net/2024/circle_v2.css" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>


                <div className={styles.upperIcons}>
                <IconsBar />

                </div>
                <div id="firstSection" className={styles.mainContent}>
                    <Descriptor />

                    <div className={styles.corouselMain}>
                        <Corousel />
                    </div>

                </div>
                <Ribbon/>
                {/*{<UpperContacts scroll={scroll}/>}*/}
                <div className={styles.videoBlock}>
                    <div className={styles.videoTextContainer}>
                        <h3>Приглашаем вас провести свою пятницу в уютной атмосфере ресторана «Адрес 39».</h3>
                        <p>Погрузитесь в настроение зажигательных каверов на полюбившиеся хиты в исполнении талантливых
                            артистов, которых мы тщательно отбираем специально для вас. В сочетании с нашими авторскими
                            коктейлями и изысканными блюдами такой вечер затронет самые глубокие душевные струны,
                            оставив приятное послевкусие на все выходные!</p>

                        <p>Субботний вечер в «Адрес 39» — это не просто ужин, а настоящее путешествие в мир гармонии и
                            изысканных вкусов. Наша команда создает особую атмосферу, где музыка играет главную роль.
                            Живые мелодии саксофона, скрипки, флейты и гитары наполняют пространство волшебством и
                            уютом, а аккомпанемент в виде изысканного бокала вина. Отдайтесь вдохновению и наслаждайтесь
                            каждым моментом этого уникального гастрономического праздника, который мы создаем специально
                            для вас!
                        </p>
                        <p>Приходите к нам и откройте для себя идеальное сочетание музыки и гастрономии!</p>
                    </div>
                    <div className={styles.videoContainer}>
                        <video loop={true} playsInline webkit-playsInline controls={true} autoPlay={false}
                               src={'/assets/video/present.mp4'} />
                    </div>

                </div>

                <Contacts refs={contactsRef} />
                <div>
                </div>
            </div>

        </>
    );
}


