import {useRef} from 'react'
import { Formik } from "formik";
import * as yup from "yup";
import { getDateToday } from '../../../common/utils/getDate'
import { PhoneInput } from '../phoneInput/PhoneInput'
import styles from './form.module.css'
import { countOfPeopleEN } from '@/lang/en';
import { countOfPeopleRU, timePickCommon } from '@/lang/ru';
import { messFieldsEN, modalFieldsInterfaceEN} from '@/lang/en';
import { messFieldsRU, modalFieldsInterfaceRU } from '@/lang/ru';
import { useAppSelector } from '@/common/hooks/useRedux';
import { FormProps } from '@/types/types';
import { mainService } from '@/service/main.service';



 function Booking({closeModal, loadingSend, successSend, errorSend}: FormProps) {

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const form = useRef(null)

  const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
  const countOfPeople = lang === 'EN' ? countOfPeopleEN : countOfPeopleRU
  const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU



  
  const validationSchema = yup.object().shape({
    user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
    user_phone:yup.string().min(17, messFields.phone.min).max(20, messFields.phone.max).required(messFields.required),
    user_date: yup.date().required(messFields.required).typeError(messFields.date.typeError),
    
  })
  
  const minDate = getDateToday()
  const maxDate = getDateToday(2)
  const {formSend} = mainService

  
  return (
    <Formik
    initialValues={{
      user_name: '',
      user_phone: '',
      user_comment: '',
      user_date: minDate,
      user_time: '11:00',
      user_count: 'на 1 человека',
      user_items: ''
    }}
    validationSchema={validationSchema}
    validateOnBlur
    onSubmit={(values) => {
        const formattedDate = values.user_date.split('-').reverse().join('/');

        const data = {
          order: `
          <span style="font-size: 20px;">Имя</span>: <span style="color: red; font-size: 22px;">${values.user_name} </span> <br> 
          <span style="font-size: 20px;">Телефон</span>: <span style="color: red; font-size: 22px;">${values.user_phone} </span> <br> 
          <span style="font-size: 20px;">Дата и время</span>: <span style="color: red; font-size: 22px;">${values.user_date} : ${values.user_time} </span> <br>
          <span style="font-size: 20px;">Количество мест</span>: <span style="color: red; font-size: 22px;">${values.user_count} </span> <br> 
          <span style="font-size: 20px;"> Комментарий</span>: <span style="color: red; font-size: 20px;">${values.user_comment}</span> <br>
          <span style="font-size: 22px;"> Перезвоните клиенту для подтверждения </span>'
          `,
          type: 'БРОНИРОВАНИЕ',
          telegrammOrder: `<b>БРОНИРОВАНИЕ!</b> 🎉\n<b>🙍‍♂️ Имя:</b> ${values.user_name}\n<b>📞 Телефон:</b> ${values.user_phone}\n<b>⏰ Дата и время:</b> ${values.user_time} - ${formattedDate}  \n<b>📦 Количество мест:</b> ${values.user_count}\n<b>💬 Комментарий:</b> ${values.user_comment || 'Отсутствует'}\n`

        }
        formSend(data, loadingSend, errorSend, successSend)
    }}
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
        <form ref={form} onSubmit={handleSubmit} className={styles.formWrapper}>
           <div className={styles.formDateWrapper}>
            <div className={styles.formInputWrapper}>
                     <div className={styles.arrow}>
                     <select onChange={(e) => {handleChange(e)}} 
                          value={values.user_count}  
                          className={styles.formInput}
                          placeholder='Колличество' 
                          name='user_count'
                          >
                          {countOfPeople.map((i, ind) => {
                            return (
                              <option value={i} key={ind}>{i}</option>
                              )
                            })}
                        </select>
                     </div>
                    
              </div>
            
            <div className={styles.formInputWrapper}>
                        <label className={styles.label}  htmlFor='user_date'>{modalFieldsInterface.date}</label>
                      
                          <input placeholder={modalFieldsInterface.datemm}  
                          onChange={(e) => {handleChange(e)}} 
                          value={values.user_date}  min={minDate} max={maxDate}  
                          type={'date'} className={`${styles.formInput} ${touched.user_date  &&  errors.user_date && styles.wrong}`}  
                          name='user_date'/>
                      
                        
              </div>
              <div className={styles.formInputWrapper}>
                       
                        <label className={styles.label}   htmlFor='user_time'>{modalFieldsInterface.time}</label>
                          <div className={styles.arrow}>
                            <select onChange={(e) => {handleChange(e)}} 
                              value={values.user_time}  
                              className={styles.formTime}  name='user_time' >
                            {timePickCommon.map((i, ind) => {
                              return (
                                <option value={i} key={ind}>{i}</option>
                                )
                              })}
                          </select>
                          </div>
                     
                      
              </div>
           </div>

           <div className={styles.formDateWrapper}>
           <div className={styles.formInputWrapper}>
                        <label htmlFor='user_name ' className='pr-20'>{modalFieldsInterface.name}</label>
                        <input onChange={(e) => {handleChange(e)}} 
                         value={values.user_name}   
                         className={`${styles.formInput} ${touched.user_name  &&  errors.user_name && styles.wrong}`} 
                         placeholder={modalFieldsInterface.name_Title}  name='user_name' />
            </div>
            <div className={`${styles.formInputWrapper} ${styles.w100}`}>
                        <label htmlFor='user_phone' className={`${styles.mobileLabel} ${styles.p20}`}>{modalFieldsInterface.phone}</label>
                        <PhoneInput clazz={`${styles.formInput} ${touched.user_phone  &&  errors.user_phone && styles.wrong}`}  value={values.user_phone} handleChange={handleChange}  />
            </div>



           </div>
           <div className={styles.formDateWrapper}>
            <textarea onChange={(e) => {handleChange(e)}} value={values.user_comment}  className={styles.formInputTextArea} placeholder={modalFieldsInterface.commentBooking}  name='user_comment' />   
           </div>
           <div className={`${styles.formControls} ${styles.w100}`}>
               <button type='button' onClick={closeModal} className={styles.danger}>{btns.btnClose[lang]}</button>
               <button  type={'submit'} className={`${styles.success}`}>{btns.btnSend[lang]}</button>

        </div>
           
    </form>
    )}
    
    </Formik>
  )
}

export default Booking;