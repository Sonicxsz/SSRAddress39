import styles from './menu.module.css';
import {motion} from 'framer-motion'
import MenuItem from "@/components/ui/menuItem/MenuItem";
import { useAppSelector } from "@/common/hooks/useRedux";
import { MainMenuRU } from "@/lang/ru";
import { MainMenuEN } from "@/lang/en";
function Menu() {
	const lang = useAppSelector(state => state.languageSlice.language)

	const menuPageArr = lang === 'EN' ? MainMenuEN : MainMenuRU
	
	return (
		
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

	);
}

export default Menu;
