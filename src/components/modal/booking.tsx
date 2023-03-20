import {useRef} from 'react'
import { Formik } from "formik";
import * as yup from "yup";
import { getDateToday } from '../../common/utils/getDate'
import { PhoneInput } from '../phoneInput/PhoneInput'
import cn from 'classnames'
import './form.scss'
import { countOfPeopleEN } from '@/lang/en';
import { countOfPeopleRU, timePickCommon } from '@/lang/ru';
import { messFieldsEN, modalFieldsInterfaceEN} from '@/lang/en';
import { messFieldsRU, modalFieldsInterfaceRU } from '@/lang/ru';
import { useAppSelector } from '@/common/hooks/useRedux';

export function Booking({closeModal, loadingSend, successSend, errorSend}) {

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const form = useRef(null)

  const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
  const countOfPeople = lang === 'EN' ? countOfPeopleEN : countOfPeopleRU
  const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU


  async function formSend(ref:React.MutableRefObject<null>) {
    loadingSend()
    if(ref.current){
        const data = new FormData(ref.current)
        const response = await fetch('phpmailer/booking.php', {
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
    user_date: yup.date().required(messFields.required).typeError(messFields.date.typeError),
    
  })
  
  const minDate = getDateToday()
  const maxDate = getDateToday(2)
  
  
  
  return (
    <Formik
    initialValues={{
      user_name: '',
      user_phone: '+7',
      user_comment: '',
      user_date: minDate,
      user_time: '11:00',
      user_count: 'на 1 человека',
      user_items: ''
    }}
    validationSchema={validationSchema}
    validateOnBlur
    onSubmit={(values) => {
            formSend(form)
        
    }}
    >
      {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
        <form ref={form} onSubmit={handleSubmit} className='form-wrapper'>
           <div className='form-date-wrapper'>
            <div className='form-input-wrapper'>
                     <div className='arrow'>
                     <select onChange={(e) => {handleChange(e)}} 
                          value={values.user_count}  
                          className='form-input'
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
            
            <div className='form-input-wrapper'>
                        <label className='label'   htmlFor='user_date'>{modalFieldsInterface.date}</label>
                      
                          <input placeholder={modalFieldsInterface.datemm}  
                          onChange={(e) => {handleChange(e)}} 
                          value={values.user_date}  min={minDate} max={maxDate}  
                          type={'date'} className={cn('form-input', {'wrong': touched.user_date  &&  errors.user_date} )}  
                          name='user_date'/>
                      
                        
              </div>
              <div className='form-input-wrapper'>
                       
                        <label className='label'   htmlFor='user_time'>{modalFieldsInterface.time}</label>
                          <div className='arrow'>
                            <select onChange={(e) => {handleChange(e)}} 
                              value={values.user_time}  
                              className='form-time '  name='user_time' >
                            {timePickCommon.map((i, ind) => {
                              return (
                                <option value={i} key={ind}>{i}</option>
                                )
                              })}
                          </select>
                          </div>
                     
                      
              </div>
           </div>

           <div className='form-date-wrapper'>
           <div className='form-input-wrapper'>
                        <label htmlFor='user_name ' className='pr-20'>{modalFieldsInterface.name}</label>
                        <input onChange={(e) => {handleChange(e)}} 
                         value={values.user_name}   
                         className={cn('form-input', {'wrong': touched.user_name  &&  errors.user_name} )} 
                         placeholder={modalFieldsInterface.name_Title}  name='user_name' />
            </div>
            <div className='form-input-wrapper w-100'>
                        <label htmlFor='user_phone' className='pr-20 mobile-label'>{modalFieldsInterface.phone}</label>
                        <PhoneInput clazz={cn('form-input', {'wrong': touched.user_phone  &&  errors.user_phone} )} value={values.user_phone} handleChange={handleChange}  />
            </div>



           </div>
           <div className='form-date-wrapper'>
            <textarea onChange={(e) => {handleChange(e)}} value={values.user_comment}  className='form-input-textArea' placeholder={modalFieldsInterface.commentBooking}  name='user_comment' />   
           </div>
           <div className='form-controls w-100'>
               <button type='button' onClick={closeModal} className='danger'>{btns.btnClose[lang]}</button>
               <button  type={'submit'} className='success'>{btns.btnSend[lang]}</button>

        </div>
           
    </form>
    )}
    
    </Formik>
  )
}

