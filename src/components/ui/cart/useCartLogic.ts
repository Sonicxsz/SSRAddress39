import * as yup from 'yup'
import { cartRU, messFieldsRU, modalFieldsInterfaceRU } from "@/lang/ru" 
import { cartEN, messFieldsEN, modalFieldsInterfaceEN } from "@/lang/en"    
import { useAppSelector } from "@/common/hooks/useRedux"
import { useRef, useState } from 'react'
import {func} from '../../../common/hooks/withMessage'
import { saveLastOrder } from '@/common/utils/lastOrder'
import { API } from '@/common/config/api'
        
        
        
export function useCartLogic(succes:func, error:func, loading:func) {
  const [height, setHeight] = useState(42)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const items = useAppSelector(state => state.cartItemsSlice.items)
  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)

   const interFaceLang = lang === 'EN' ? cartEN : cartRU
   const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
   const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU


   const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
      user_phone: yup.string().min(17, messFields.phone.min).max(19, messFields.phone.max).required(messFields.name.type_error),
      user_address: yup.string().when('user_type', {
        is: 'Доставка',
        then: (schema) => schema.min(3, messFields.address.min).required(messFields.required),
        otherwise: (schema) => schema.notRequired(),
      }),
      user_type: yup.string().required(messFields.name.type_error)
    }) 
    let sum = 0;
    const order = items.map((i,ind) => {
       sum += (i.price * i.count)
      if(i.variable){
        return `№ ${ind +1}: ${i.name['RU']} ${i.variable}: ${i.count}шт   \n`
      }else{
        return `№ ${ind +1}: ${i.name['RU']}: ${i.count}шт   \n`
      }
      
    }).join('')


   async function formSend(data: any) {
        if(sum < 1000){
            return null
        }
    setIsSubmitting(true)
    loading()

    try {
      const response = await fetch(API.mail, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      if(response.status !== 200){
        error()
      }
      else{
        saveLastOrder(items)
        succes()
      }
    } catch {
      error()
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalSum = items.reduce((acc, i) => acc + (i.count * i.price), 0)
  const form = useRef(null)
   

    return {
        interFaceLang,
        order,
        sum,
        items,
        btns,
        lang,
        totalSum,
        validationSchema,
        height,
        form,
        setHeight,
        formSend,
        isSubmitting,
        modalFieldsInterface
    }
  
}