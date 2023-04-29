import React, { useState } from 'react'
import styles from './underBook.module.css'
import { PhoneInput } from '../phoneInput/PhoneInput'
import { useAppSelector } from '@/common/hooks/useRedux'
import {  modalFieldsInterfaceEN} from '@/lang/en';
import {  modalFieldsInterfaceRU, timePickCommon } from '@/lang/ru';
import Spinner from '@/components/svg/Spinner';
import { mainService } from '@/service/main.service';

function UnderBook() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [status, setStatus] = useState(0) 

  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)
  const {formSend} = mainService


  const sendMess = {
    'RU': 'Ваша заявка отправлена!',
    'EN': 'Your application has been sent!'
  }
  const failMess = {
    'RU': 'Упс что-то пошло не так, попробуйте позже!',
    'EN': 'Oops, something went wrong, please try again later!'
  }


  const messFields = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU

  const handleChangeStatus = (val: 1 | 2 | 3 | 0) => {
    return () => {
      setStatus(val)
    }
  }

  const sendDate = () => {
    const data = {
      order: `
      <span style="font-size: 20px;">Имя</span>: <span style="color: red; font-size: 22px;">${name} </span> <br> 
      <span style="font-size: 20px;">Телефон</span>: <span style="color: red; font-size: 22px;">${phone} </span> <br> 
      <span style="font-size: 20px;">Дата и время</span>: <span style="color: red; font-size: 22px;">${date} : ${time} </span> <br>
      <span style="font-size: 22px;"> Перезвоните клиенту для подтверждения </span>'
      `,
      type: 'БРОНИРОВАНИЕ'
    }
    formSend(data, handleChangeStatus(1),handleChangeStatus(3),handleChangeStatus(2))
  }

  const statusFields = status === 1 ? <Spinner /> : status === 2 ? <h2>{sendMess[lang]}</h2> : status === 3 ? <h2>{failMess[lang]}</h2> : null
  return (
    <div className={styles.container}>
        {status === 0 ?( <>
          <h2>Забронировать стол</h2>
        <div className={styles.wrapper}>
        <div className={styles.group}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={messFields.name} className={styles.underInput} type="text" name='name'/>
        <input onChange={(e) => setDate(e.target.value)}  placeholder={messFields.date}  className={styles.underInput} type={'date'} name='date'/>
        </div>
        <div className={styles.group}>
          <div className={styles.arrow}>
          <select value={time} onChange={(e) => setTime(e.target.value)}  placeholder={messFields.time} className={styles.underInput}  name='time'>
            {timePickCommon.map((i, ind) => {
            return (
              <option value={i} key={ind}>{i}</option>
              )
            })}
            </select>
          </div>
        <PhoneInput clazz={styles.underInput}  value={phone} handleChange={(e) => setPhone(e.target.value)}/>
        </div>
        <button onClick={sendDate} className={styles.btnSend}>{btns.btnSend[lang]}</button>
        </div>
        </>) : statusFields
        
      } 
    </div>
  )
}




export default UnderBook