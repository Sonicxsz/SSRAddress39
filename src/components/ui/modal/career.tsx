import {useRef} from 'react'
import { PhoneInput } from '../phoneInput/PhoneInput'
import { messFieldsEN, modalFieldsInterfaceEN} from '@/lang/en';
import { messFieldsRU, modalFieldsInterfaceRU } from '@/lang/ru';
import { Formik } from "formik";
import * as yup from "yup";
import styles from './form.module.css'
import { useAppSelector } from '@/common/hooks/useRedux';
import { FormProps } from '@/types/types';
import { mainService } from '@/service/main.service';


function CareerForm({closeModal, loadingSend, successSend, errorSend}:FormProps) {

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const form = useRef(null)

  const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
  const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU
    
  const {formSend} = mainService
  const validationSchema = yup.object().shape({
    user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
    user_phone:yup.string().min(17, messFields.phone.min).max(20, messFields.phone.max).required(messFields.required),
    user_comment: yup.string().required(messFields.required)
  })
  
  return (
    <Formik
        initialValues={{
        user_name: '',
        user_phone: '',
        user_comment: '',
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values =>{
          const data = {
            order: `
            <span style="font-size: 20px;">Имя</span>: <span style="color: red; font-size: 22px;">${values.user_name}</span> <br> 
            <span style="font-size: 20px;">Телефон</span>: <span style="color: red; font-size: 22px;">${values.user_phone}</span> <br> 
            <span style="font-size: 20px;"> Комментарий</span>: <span style="color: red; font-size: 20px;">${values.user_comment}</span>
            `,
              telegrammOrder: `<b>ЗАЯВКА НА РАБОТУ!</b> 🎉\n<b>🙍‍♂️ Имя:</b> ${values.user_name}\n<b>📞 Телефон:</b> ${values.user_phone}\n<b>💬 Комментарий:</b> ${values.user_comment || 'Отсутствует'}\n`,

            type: 'Заявка на работу'
          }
          formSend(data, loadingSend, errorSend, successSend)
        }}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
   
      <form ref={form} onSubmit={handleSubmit} className={styles.formWrapper}>

           <div className={styles.formDateWrapper}>
           <div className={styles.formInputWrapper}>
                        <label htmlFor='user_name'>{modalFieldsInterface.name}</label>
                        <input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.user_name}
                          className={`${styles.formInput} ${touched.user_name && errors.user_name ? styles.wrong : ''}`}
                          placeholder={modalFieldsInterface.name_Title}
                          autoComplete="name"
                          name='user_name'
                          id='user_name'
                        />
                        {touched.user_name && errors.user_name && <p className={styles.errorMessage}>{errors.user_name}</p>}
            </div>
            <div className={`${styles.formInputWrapper} ${styles.w100}`}>
                        <label htmlFor='user_phone' className={`${styles.mobileLabel} ${styles.p20}`}>{modalFieldsInterface.phone}</label>
                        <PhoneInput
                          id="user_phone"
                          placeholder={modalFieldsInterface.phone}
                          clazz={`${styles.formInput} ${touched.user_phone && errors.user_phone ? styles.wrong : ''}`}
                          value={values.user_phone}
                          handleChange={handleChange}
                        />
                        {touched.user_phone && errors.user_phone && <p className={styles.errorMessage}>{errors.user_phone}</p>}
            </div>

           </div>
           <div className={styles.formDateWrapper}>
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.user_comment}
              className={`${styles.formInputTextArea} ${touched.user_comment && errors.user_comment ? styles.wrong : ''}`}
              placeholder={modalFieldsInterface.commentCareer}
              name='user_comment'
            />
            {touched.user_comment && errors.user_comment && <p className={styles.errorMessage}>{errors.user_comment}</p>}
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