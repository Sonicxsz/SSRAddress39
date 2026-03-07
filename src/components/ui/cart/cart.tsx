
import styles from './cart.module.css';
import CartItem from './item/cartItem';
import {AiOutlineClose} from 'react-icons/ai';
import { PhoneInput } from '../phoneInput/PhoneInput';
import { Formik } from 'formik';
import { useCartLogic } from './useCartLogic';
import { useAppDispatch } from '@/common/hooks/useRedux';
import { setCartModal } from '@/store/controlSlice';
import {func} from '../../../common/hooks/withMessage'
import Link from 'next/link';
import { useState, useCallback } from 'react';
interface baseCartProps {
  success:func, 
  error: func, 
  loading: func
}

const CLOSE_DURATION = 250;

function Cart({ success, error, loading}: baseCartProps) {
  const dispatch = useAppDispatch()
  const [isClosing, setIsClosing] = useState(false)
  const {interFaceLang, 
        items,
        btns,
      sum,
        totalSum,
        height,
        form,
        validationSchema,
        setHeight,
        formSend,
        order,
        modalFieldsInterface,
        isSubmitting,
        lang} = useCartLogic(success, error, loading)

        const closeCart = (e:any) => {
          if(e.target instanceof Element && e.target === e.currentTarget){
            closeCartbtn()
          }
        } 
      
        const closeCartbtn = useCallback(() => {
          if (isClosing) return
          setIsClosing(true)
          setTimeout(() => {
            dispatch(setCartModal(false))
          }, CLOSE_DURATION)
        }, [isClosing, dispatch])
        const minSumBtn =   {
        RU: 'Мин сумма заказа 1000руб',
        EN: 'Min order amount 1000 rub.',
  }
  return (
    <div onClick={(e) => closeCart(e)} className={`${styles.cartBackground} ${isClosing ? styles.cartBackgroundClosing : ''}`}>
      <div className={styles.cartCloseBtn}>
          <AiOutlineClose onClick={closeCartbtn}/>
      </div>
        <div className={`${styles.cartWrapper} ${isClosing ? styles.cartWrapperClosing : ''}`}>
        <div className={styles.cartTitle}>
            <h2>{interFaceLang.order}:</h2>
        </div>
        <div className={styles.cartItems}>
                { items.map((i) =>{
                const fullName = i.variable ? i.name[lang]+ ' ' + i.variable : i.name[lang]
                return <CartItem   id={i.id}key={i.id} name={fullName} img={i.img} price={i.price} count={i.count} /> 
                })}
                
        </div>
        <div className={styles.cartResult}>{interFaceLang.sum}: {totalSum} ₽</div>
        <div className={styles.cartOrder}>
        
        <Formik
        initialValues={{
          user_name: '',
          user_phone: '',
          user_address: '',
          user_type: 'Самовывоз',
          user_comment: ''
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => {
          const data = {
            order: `
            <span style="font-size: 20px;">Имя</span>: <span style="color: red; font-size: 22px;">${values.user_name} </span> <br> 
            <span style="font-size: 20px;">Телефон</span>: <span style="color: red; font-size: 22px;">${values.user_phone} </span> <br> 
            <span style="font-size: 20px;">Тип</span>: <span style="color: red; font-size: 22px;">${values.user_type}  </span> <br>
            <span style="font-size: 20px;">Адрес</span>: <span style="color: red; font-size: 22px;">${values.user_address || '—'} </span> <br> <br> 
            <span style="font-size: 20px;">Заказ</span>: <br> <span style="font-size: 22px;">${order} </span> <br> 
            <span style="font-size: 20px;"> Комментарий</span>: <span style="color: red; font-size: 20px;">${values.user_comment} </span> <br>
            <span style="font-size: 22px;"> Перезвоните клиенту для подтверждения </span>`,
            type: 'ЗАКАЗ',
              telegrammOrder: `<b>Новый заказ!</b> 🎉\n<b>🙍‍♂️ Имя:</b> ${values.user_name}\n<b>📞 Телефон:</b> ${values.user_phone}\n<b>📦 Тип:</b> ${values.user_type}\n<b>🏠 Адрес:</b> ${values.user_address || '—'}\n<b>🛍️ Заказ:</b>\n${order}\n<b>💬 Комментарий:</b> ${values.user_comment || 'Отсутствует'}\n<b>💵 Сумма:</b> ${`${sum}₽` || 'Сумма недоступна'}\n`

          }
          formSend(data)}}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue}) =>(

            <form onSubmit={handleSubmit} ref={form}>
                <div style={{borderBottom: 'none', paddingTop: '15px'}} className={styles.bookMain}>
                  <div className={styles.inputsWrapper}>

                      <div className={styles.toggleGroup}>
                        <button
                          type="button"
                          className={values.user_type === 'Самовывоз' ? `${styles.toggleBtn} ${styles.toggleBtnActive}` : styles.toggleBtn}
                          onClick={() => setFieldValue('user_type', 'Самовывоз')}
                        >
                          {modalFieldsInterface.type.self}
                        </button>
                        <button
                          type="button"
                          className={values.user_type === 'Доставка' ? `${styles.toggleBtn} ${styles.toggleBtnActive}` : styles.toggleBtn}
                          onClick={() => setFieldValue('user_type', 'Доставка')}
                        >
                          {modalFieldsInterface.type.delevery}
                        </button>
                      </div>

                      {values.user_type === 'Доставка' && <span className={styles.notice}>Доставка осуществляется c 11:00 по МСК</span>}

                      <div className={styles.bookDescription}>
                          <label className={styles.fieldLabel} htmlFor="user_name">{modalFieldsInterface.name}</label>
                          <input
                            id="user_name"
                            placeholder={modalFieldsInterface.name}
                            autoComplete="name"
                            className={`${styles.bookInput} ${touched.user_name && errors.user_name ? styles.wrong : ''}`}
                            name='user_name'
                            onBlur={handleBlur}
                            value={values.user_name}
                            onChange={handleChange}
                          />
                          {touched.user_name && errors.user_name && <p className={styles.errorMessage}>{errors.user_name}</p>}
                      </div>
    
                      <div className={styles.bookDescription}>
                          <label className={styles.fieldLabel} htmlFor="user_phone">{modalFieldsInterface.phone}</label>
                          <PhoneInput
                            id="user_phone"
                            placeholder={modalFieldsInterface.phone}
                            clazz={`${styles.bookInput} ${touched.user_phone && errors.user_phone ? styles.wrong : ''}`}
                            value={values.user_phone}
                            handleChange={handleChange}
                          />
                          {touched.user_phone && errors.user_phone && <p className={styles.errorMessage}>{errors.user_phone}</p>}
                      </div>

                      {values.user_type === 'Доставка' && (
                        <div className={styles.bookDescription}> 
                            <label className={styles.fieldLabel} htmlFor="user_address">{modalFieldsInterface.address}</label>
                            <input
                              id="user_address"
                              placeholder={modalFieldsInterface.address}
                              autoComplete="street-address"
                              className={`${styles.bookInput} ${touched.user_address && errors.user_address ? styles.wrong : ''}`}
                              name='user_address'
                              onBlur={handleBlur}
                              value={values.user_address}
                              onChange={handleChange}
                            />
                            {touched.user_address && errors.user_address && <p className={styles.errorMessage}>{errors.user_address}</p>}
                        </div>
                      )}

                      <div className={styles.bookDescription}>
                          <label className={styles.fieldLabel} htmlFor="user_comment">{modalFieldsInterface.comment}</label>
                          <textarea
                            id="user_comment"
                            placeholder={modalFieldsInterface.comment}
                            className={styles.bookInput}
                            onChange={(e) => { 
                              handleChange(e)
                              if(e.target.scrollHeight <= 85){
                                setHeight(e.target.scrollHeight)}
                              }}
                            style={{height: height + 'px'}}
                            name='user_comment'
                          />
                      </div>

                  </div>
                </div>
                <div className={styles.conf}>
                  Оформляя заказ, Вы даете согласие на обработку персональных данных и соглашаетесь  с <Link target={'_blank'} href={"/Terms"}>Политикой конфиденциальности</Link> и <Link target={'_blank'} href={"/Cookies"}>Cookies</Link>
                 </div>
                {sum < 1000 && <div className={styles.minSumHint}>{minSumBtn[lang]}</div>}
                <div className={styles.bookControl}>
                      <button
                        className={!isValid && !dirty ? styles.order : `${styles.order} ${styles.buttonActive} ${sum < 1000 ? styles.order_minSum : ''} `}
                        disabled={(!isValid && !dirty) || sum < 1000 || isSubmitting}
                        type='submit'
                      >{isSubmitting ? (lang === 'RU' ? 'Отправляем...' : 'Sending...') : btns.btnSend[lang]}</button>
                </div>
            </form>
          )}
        
        </Formik>
        </div>
    </div>
    </div>
  )
}

export default Cart