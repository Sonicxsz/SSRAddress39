import styles from './styles.module.css';
import IconsBar from '@/components/ui/iconBar/iconBar';
interface UpperContacts {
    scroll?: () => void
 }
export const UpperContacts = ({scroll}:UpperContacts) => {
    return (
        <div className={styles.firstSection}>
            <div className={styles.right}>
                <div className={styles.infoBlock}>
                    <span>Время работы:</span>
                    <span>Пн-Вс 09:00 - 00:00</span>
                </div>
                <div className={styles.infoBlock}>
                    <span>Наш адрес:</span>
                    <span>просп. Маршала Жукова, 39А, корп. 1,</span>
                </div>
                <span className={styles.accentText} onClick={() =>  scroll?.()}>Как к нам пройти ?</span>
                <IconsBar />
            </div>
        </div>
    )
}