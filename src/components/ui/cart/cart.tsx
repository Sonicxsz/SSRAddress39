
import styles from './cart.module.css';
import CartItem from './item/cartItem';
import {AiOutlineClose} from 'react-icons/ai';
import { PhoneInput } from '../phoneInput/PhoneInput';
import { Formik } from 'formik';
import { useCartLogic } from './useCartLogic';
import {func} from '../../../common/hooks/withMessage'
interface baseCartProps {
  succes:func, 
  error: func, 
  loading: func
}

interface fullCartProps extends baseCartProps{
  closeCart: () => void, 
  closeCartbtn:() => void,
}

function Cart({ closeCart, closeCartbtn, succes, error, loading}: fullCartProps) {
  const {interFaceLang, 
        items,
        btns,
        totalSum,
        height,
        form,
        validationSchema,
        setHeight,
        formSend,
        order,
        modalFieldsInterface,
        lang} = useCartLogic(succes, error, loading)

        
  
  return (
    <div onClick={closeCart} className={styles.cartBackground}>
      <div className={styles.cartCloseBtn}>
          <AiOutlineClose onClick={closeCartbtn}/>
      </div>
        <div className={styles.cartWrapper}>
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
          user_phone: '+7',
          user_address: '',
          user_type: 'Самовывоз',
          user_comment: ''
        }}
        validationSchema={validationSchema}
        validateOnBlur
        onSubmit={values => formSend(form as unknown as React.MutableRefObject<HTMLFormElement>)}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
            
            <form onSubmit={handleSubmit} ref={form}>
                <div className='book-label'>
                
                </div>
                <div style={{borderBottom: 'none', paddingTop: '15px'}} className={styles.bookMain}>
                  <div  className={styles.inputsWrapper}>
                      
                      <div className={styles.bookDescription}>
                          <input placeholder={modalFieldsInterface.name} className={`${styles.bookInput} ${touched.user_name  &&  errors.user_name && styles.wrong}`}  name='user_name'
                          onBlur={handleBlur}
                          value={values.user_name}
                          onChange={handleChange}/>
                          {touched.user_name && errors.user_name && <p className={styles.errorMessage}>{errors.user_name}</p>}
                      </div>
    
                      <div className={styles.bookDescription}>
                      <PhoneInput clazz={`${styles.bookInput} ${touched.user_phone  &&  errors.user_phone && styles.wrong}`} value={values.user_phone} handleChange={handleChange}  />
                      </div>
                      <div className={styles.bookDescription}> 
                          <input placeholder={modalFieldsInterface.address} className={`${styles.bookInput} ${touched.user_address  &&  errors.user_address && styles.wrong}`}  name='user_address'
                          onBlur={handleBlur}
                          value={values.user_address}
                          onChange={handleChange}/>
                          {touched.user_address && errors.user_address && <p className={styles.errorMessage}>{errors.user_address}</p>}
                      </div>
                      <div className={styles.bookDescription}>
                          <textarea placeholder={modalFieldsInterface.comment} className={styles.bookInput}   onChange={(e) => { 
                            if(e.target.scrollHeight <= 85){
                              setHeight(e.target.scrollHeight)}
                            }
                            } style={{height: height + 'px'}}  name='user_comment' />
                      </div>
                    <div role="group" aria-labelledby="my-radio-group" className={`${styles.cartCheckbox} ${touched.user_type  &&  errors.user_type && styles.wrong}`}>
                    <label>{modalFieldsInterface.type.self}</label>
                          <input type='radio' className={styles.bookInput}   value={'Самовывоз'}
                            onChange={handleChange}    
                            checked={values.user_type === 'Самовывоз'}
                           name='user_type' />
                      <label>{modalFieldsInterface.type.delevery}</label>
                          <input type='radio' className={styles.bookInput}   
                            value={'Доставка'}    
                            onChange={handleChange}   
                            checked={values.user_type === 'Доставка'}           
                            name='user_type' />
                    </div>
                      <div className={styles.bookDescription}  style={{display: 'none'}}>
                          <textarea readOnly placeholder='Комментарий' className={styles.bookInput}  value={order}   name='user_order' />
                      </div>
                  
                  </div>
                              
                </div>
    
                <div className={styles.bookControl}>
                      <button
                        className={isValid && dirty ? `${styles.order} ${styles.buttonActive}` : styles.order}
                        disabled={!isValid && !dirty}
                        type='submit'
                      >{btns.btnSend[lang]}</button>
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