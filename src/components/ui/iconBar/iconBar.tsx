import styles from './iconBar.module.css';
import { FaInstagram } from 'react-icons/fa';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';
function IconsBar() {
    return (
        <div className={styles.wrapperIcons}>

            <div className={styles.icon}>
                <a href="https://t.me/rest39">
                    <BsTelegram color="#428bff" size={26} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="https://wa.me/+79850390039">
                    <BsWhatsapp color="#30f03d" size={26} />
                </a>
            </div>
            <div className={styles.icon}>
                <a href="tel:+79850390039">
                    <IoCall color="#141313" size={26} />
                </a>
            </div>
        </div>
    );
}

export default IconsBar;
