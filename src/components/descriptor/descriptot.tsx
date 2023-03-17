import styles from '../../styles/descriptor.module.css'
import { descriptorEN } from '@/lang/en';
import { descriptorRU } from '@/lang/ru';
import { useAppSelector } from '@/common/hooks/useRedux';
import { DescriptorProps } from '@/types/types';
function Descriptor({openModal, openDelevery}:DescriptorProps) {
  const lang = useAppSelector(state => state.languageSlice.language)
  const data = lang === 'EN' ? descriptorEN : descriptorRU;

  return (
    <div className={styles.wrapperDescriptor}>
        <p><span>{data.title}</span> {data.description} </p>
        <div className={styles.flex}>
            <button className={styles.descrButton} onClick={openModal}><span className='menu-link' >{data.btnBooking}</span></button>
            <button className={styles.descrButton} onClick={openDelevery}>{data.btnDelevery}</button>
        </div>
    
    </div>
  )
}

export default Descriptor