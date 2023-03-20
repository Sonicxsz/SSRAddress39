import Link from 'next/link'
import styles from './deleveryModal.module.css'
import { useAppSelector } from '@/common/hooks/useRedux'
import { deleveryModalEN } from '@/lang/en'
import { deleveryModalRU } from '@/lang/ru'
function DeleveryModal({closeModal}: {closeModal: () => void}) {

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const interfaceLang = lang === 'EN' ? deleveryModalEN : deleveryModalRU

  return (
    <div className={styles.deleveryModal}>
        <div className={styles.deleveryModalBtns}>
        <Link href={'/delivery'} onClick={closeModal} className={styles.deleveryModalBtn}>{interfaceLang.delevery}<br /> {interfaceLang.or} <br /> {interfaceLang.self}</Link>
        <a 
        href='https://eda.yandex.ru/moscow/r/adres_39?placeSlug=adres_39_ewrhd&utm_campaign=rest_card&utm_content=desktop&utm_medium=yp&utm_source=ymaps' 
        onClick={closeModal} className={styles.deleveryModalBtn}>{interfaceLang.yandex}</a>

        </div>
        <hr/>
         <div className={`${styles.formControls} ${styles.dRight} ${styles.w100}`}>
               <button type='button' onClick={closeModal} className={styles.danger}>{btns.btnClose[lang]}</button>

        </div>
    </div>
  )
}

export default DeleveryModal