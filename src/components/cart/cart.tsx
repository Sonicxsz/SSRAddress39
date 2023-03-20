
import styles from './cart.module.css';
import CartItem from '../cartItem/cartItem';
import {AiOutlineClose} from 'react-icons/ai';
import { PhoneInput } from '../phoneInput/PhoneInput';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { messFields,modalFieldsInterface } from '../modal/language';
import { useCartLogic } from './useCartLogic';

interface baseCartProps {
  succes:boolean, 
  error: boolean, 
  loading: boolean
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
        validationSchema,
        lang} = useCartLogic(succes, error, loading)
  ////
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
        onSubmit={values => formSend(form)}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>(
            
            <form onSubmit={handleSubmit} ref={form}>
                <div className='book-label'>
                
                </div>
                <div style={{borderBottom: 'none', paddingTop: '15px'}} className='book-main'>
                  <div  className='inputs-wrapper'>
                      
                      <div className='book-description'>
                          <input placeholder={modalFieldsInterface.name[lang]} className={cn('book-input', {'wrong': touched.user_name  &&  errors.user_name} )}  name='user_name'
                          onBlur={handleBlur}
                          value={values.user_name}
                          onChange={handleChange}/>
                          {touched.user_name && errors.user_name && <p className='error-message'>{errors.user_name}</p>}
                      </div>
    
                      <div className='book-description'>
                      <PhoneInput clazz={cn('book-input', {'wrong': touched.user_phone  &&  errors.user_phone} )} value={values.user_phone} handleChange={handleChange}  />
                      </div>
                      <div className='book-description'> 
                          <input placeholder={modalFieldsInterface.address[lang]} className={cn('book-input', {'wrong': touched.user_address  &&  errors.user_address} )}  name='user_address'
                          onBlur={handleBlur}
                          value={values.user_address}
                          onChange={handleChange}/>
                          {touched.user_address && errors.user_address && <p className='error-message'>{errors.user_address}</p>}
                      </div>
                      <div className='book-description'>
                          <textarea placeholder={modalFieldsInterface.comment[lang]} className='book-input'  onChange={(e) => { 
                            if(e.target.scrollHeight <= 85){
                              setHeight(e.target.scrollHeight)}
                            }
                            } style={{height: height + 'px'}}  name='user_comment' />
                      </div>
                    <div role="group" aria-labelledby="my-radio-group" className={cn('cart-checkbox', {'wrong': touched.user_type  &&  errors.user_type} )}>
                    <label>{modalFieldsInterface.type.self[lang]}</label>
                          <input type='radio' className='book-input'   value={'Самовывоз'}
                            onChange={handleChange}    
                            checked={values.user_type === 'Самовывоз'}
                           name='user_type' />
                      <label>{modalFieldsInterface.type.delevery[lang]}</label>
                          <input type='radio' className='book-input'  
                            value={'Доставка'}    
                            onChange={handleChange}   
                            checked={values.user_type === 'Доставка'}           
                            name='user_type' />
                    </div>
                      <div className='book-description'  style={{display: 'none'}}>
                          <textarea readOnly placeholder='Комментарий' className='book-input' value={order}   name='user_order' />
                      </div>
                  
                  </div>
                              
                </div>
    
                <div className='book-control'>
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