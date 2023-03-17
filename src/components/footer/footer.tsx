import styles from '../../styles/footer.module.css'
import { useAppSelector } from '@/common/hooks/useRedux';
import { footerRU } from '@/lang/ru';
import { footerEN } from '@/lang/en';

function Footer({children}:{children:React.ReactNode }) {
  const lang = useAppSelector(state => state.languageSlice.language);
  
  const address = lang === 'EN' ? footerEN : footerRU 
  return (
    <div className={styles.footer}>
        <div className={styles.footerText}>
        {address}
        </div>
        {children}
     </div>
  )
}

export default Footer