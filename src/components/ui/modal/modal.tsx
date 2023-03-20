import { useState, useEffect } from 'react'
import {GrUserManager, GrTime} from 'react-icons/gr'
import LogoComponent from '../../svg/LogoComponent'

import { motion, AnimatePresence } from "framer-motion"
import NewMessage from '../newMessage/newMessage';
import Spinner from '../../svg/Spinner';
import {DialogModalMessagesEN} from '../../../lang/en'
import {DialogModalMessagesRU} from '../../../lang/ru'

import styles from './modal.module.css'
import { ModalProps } from '@/types/types';
import { useAppSelector } from '@/common/hooks/useRedux';
import DeleveryModal from '../deleveryModal/deleveryModal';
import dynamic from 'next/dynamic';


const CareerForm = dynamic(() => import('./career'), {
  ssr: false
});
const Booking = dynamic(() => import('./booking'),{
  ssr: false
});



function Modal({ showModal, type, closeModal, label}:ModalProps) {
  const lang = useAppSelector(state => state.languageSlice.language)
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const interfaceModalMessages = lang === 'EN' ? DialogModalMessagesEN : DialogModalMessagesRU
 
  
  const loadingSend = () =>{
      setLoading(true)
  }

  useEffect(() => {
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = ''
    }
  }, [showModal])

  const succesSend = () => {
      setLoading(false)
      setSend(true)
      
  }
  const errorSend = () => {
      setLoading(false)
      setError(true)
  }

  const finalClose = () => {
    setSend(false)
    setLoading(false)
    setError(false)
    closeModal()
  }

  const Component = type === 'career' ? CareerForm : type === 'delivery' ? DeleveryModal : Booking

  return (
    <AnimatePresence>
      {showModal &&  <motion.div 
    className={styles.modalWrapper}
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
  
        <motion.div  className={styles.modal}
          initial={{ y: "100%" }}
          animate={{ y: "0" }}
          exit={{ y: '-30%' }}
        >
        <div className={styles.modalHead}>
             <div> <p className={styles.modalTitle}>{label}</p>
                    <span className={styles.modalSubtitle}>{interfaceModalMessages.description}</span>
              </div> <span className={`${styles.logo} ${styles.black}`}><LogoComponent color={styles.black}/></span>
        </div>
        <hr/>

        <div className={styles.modalMain}>
           {loading ? 
           <NewMessage loading={loading} Icon={Spinner} message={interfaceModalMessages.loadingMessage} /> : 
           error ? 
           <NewMessage loading={loading} finalClose={finalClose}  Icon={GrTime} message={interfaceModalMessages.failMessage} /> : 
           send ? 
           <NewMessage loading={loading} finalClose={finalClose}  Icon={GrUserManager} message={interfaceModalMessages.succesMessage} /> :
           <Component closeModal={closeModal} errorSend={errorSend}  loadingSend={loadingSend} successSend={succesSend} />}
        </div>
       
        <hr/>
        
         {type !== 'delivery' && <div className={styles.modalFooter}>
            {interfaceModalMessages.notice}
          </div>}
        </motion.div>
    </motion.div>}
    </AnimatePresence>
  )
}


export default Modal