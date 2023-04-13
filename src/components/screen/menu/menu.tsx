import styles from './menu.module.css';
import {motion} from 'framer-motion'
import MenuItem from "@/components/ui/menuItem/MenuItem";
import { useAppSelector } from "@/common/hooks/useRedux";
import { MainMenuRU } from "@/lang/ru";
import { MainMenuEN } from "@/lang/en";
import Head from 'next/head';
function Menu() {
	const lang = useAppSelector(state => state.languageSlice.language)

	const menuPageArr = lang === 'EN' ? MainMenuEN : MainMenuRU
	
	return (
		<>
		<Head>
            	<title>Посмотреть разнообразное меню блюд и напитков в ресторане Адрес39</title>
                <meta
                    name="description"
                    content="Посмотреть уникальное японское, детское, классическое меню и винную карту в ресторане Адрес39 в Москве"
                />
                <meta name="robots" content="index, follow" />
				<meta name='keywords' 
                    content="Адрес39,ресторан,винный бар,ЖК комплекс, Wellton Park ,винные бары,ресторан в Москве,разная кухня москва,МО ресторан,лучшие блюда в Москве,детское меню,японское меню,классическое меню,доставка,самовывоз,официальный сайт ресторана Адрес39,ресторан блюда меню, бронирование стола"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
          </Head>
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
		className={styles.wrapper}>
			<div className={styles.flex}>
				{menuPageArr.map((i, ind) => {		
					return <MenuItem key={ind} name={i.name} img={i.img} src={i.src} />;
				})}
			</div>
	</motion.div>
	</>
	);
}

export default Menu;
