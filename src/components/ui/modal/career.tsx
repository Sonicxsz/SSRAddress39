import {useRef} from 'react'
import { PhoneInput } from '../phoneInput/PhoneInput'
import { messFieldsEN, modalFieldsInterfaceEN} from '@/lang/en';
import { messFieldsRU, modalFieldsInterfaceRU } from '@/lang/ru';
import { Formik } from "formik";
import * as yup from "yup";
import styles from './form.module.css'
import { useAppSelector } from '@/common/hooks/useRedux';
import { FormProps } from '@/types/types';


function CareerForm({closeModal, loadingSend, successSend, errorSend}:FormProps) {

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const form = useRef(null)

  const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
  const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU

  async function formSend(ref:React.MutableRefObject<null>) {
    if(ref.current){
        loadingSend()
        const data = new FormData(ref.current)
        const response = await fetch('phpmailer/index.php', {
          method: 'POST',
          body: data
        })
        if(!response.ok){
          errorSend()
        }else{
          successSend()
        }
    }
    
  }
  const validationSchema = yup.object().shape({
    user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
    user_phone:yup.string().min(17, messFields.phone.min).max(20, messFields.phone.max).required(messFields.required),
    user_comment: yup.string().required(messFields.required)
  })
 
  return (
    <Formik
        initialValues={{
        user_name: '',
        user_phone: '+7',
        user_comment: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => formSend(form)}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
   
      <form ref={form} action='#' onSubmit={handleSubmit} className={styles.formWrapper}>

           <div className={styles.formDateWrapper}>
           <div className={styles.formInputWrapper}>
                        <label htmlFor='user_name ' className={styles.p20}>{modalFieldsInterface.name}</label>
                        <input onChange={handleChange} value={values.user_name}   className={`${styles.formInput} ${touched.user_name  &&  errors.user_name && styles.wrong}`} placeholder={modalFieldsInterface.name_Title}  name='user_name' />
                        
            </div>
            <div className={`${styles.formInputWrapper} ${styles.w100}`}>
                        <label htmlFor='user_phone' className={`${styles.mobileLabel} ${styles.p20}`}>{modalFieldsInterface.phone}</label>
                        <PhoneInput clazz={`${styles.formInput} ${touched.user_phone  &&  errors.user_phone && styles.wrong}`} value={values.user_phone} handleChange={handleChange} />
            </div>

           </div>
           <div className={styles.formDateWrapper}>
            <textarea onChange={handleChange} value={values.user_comment} className={`${styles.formInputTextArea} ${touched.user_comment && errors.user_comment && styles.wrong}`}  placeholder={modalFieldsInterface.commentCareer}  name='user_comment' />   
           </div>
           <div className={`${styles.formControls} ${styles.w100}`}>
               <button type='button' onClick={closeModal} className={styles.danger}>{btns.btnClose[lang]}</button>
               <button type={'submit'}  className={styles.success}>{btns.btnSend[lang]}</button>

        </div>
           
    </form>
      )}
        
      </Formik>
  )
}

export default CareerForm