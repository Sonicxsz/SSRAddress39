import { useAppSelector } from '@/common/hooks/useRedux'
import { newMessageProps } from '@/types/types'
import styles from '../../styles/newMessage.module.css'



function NewMessage({Icon, message, loading, finalClose}: newMessageProps) {
  const lang = useAppSelector(state => state.languageSlice.language)
  
  const btnLang = {
    'RU': 'Закрыть окно',
    'EN': 'Close window'
  }

  return (
    <div className={styles.new}>
        <div><Icon size={55}/></div>
        <p className={styles.newLabel}>{message}</p>
        {!loading && <button onClick={finalClose} className={`${styles.btnNew} ${styles.danger}`}>{btnLang[lang]}</button>}
    </div>
  )
}

export default NewMessage