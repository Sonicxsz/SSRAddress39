import { useAppSelector } from '@/common/hooks/useRedux';
import './message.scss';
import {messageProps} from '../../types/types'
import LogoComponent from '../svg/LogoComponent';
import styles from '../../styles/message.module.css'
import Link from 'next/link';
import { messageEn } from '@/lang/en';
import { messageRu } from '@/lang/ru';



function Message({message, Icon, loading, clearCart, cart=false}: messageProps) {
  const lang = useAppSelector(state => state.languageSlice.language)
  const interfaceLang = lang === 'RU' ? messageRu : messageEn
  
  return (
  <div className={styles.messageWrapper}>
      <div className='book-wrapper'>
      <div className='book-label'>
          {!loading && <><span>{interfaceLang.status} </span> <span  className='logo black'><LogoComponent color='black'/></span></>}
      </div>
      <div className='message-flex'>
          <div> <Icon size={50}/> </div>
          <div className='message-text'>{message}</div>
      </div>
        {!loading && <div className={styles.messageBtn}>
          <Link  href={'/'}>
            <button onClick={() =>{
              if(cart){
                clearCart()
              }
            }}>{interfaceLang.backBtn}</button>
          </Link>
        </div>}
    </div>
  </div>
  )
}

export default Message