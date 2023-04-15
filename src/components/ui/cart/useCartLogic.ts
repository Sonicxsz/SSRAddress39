import * as yup from 'yup'
import { cartRU, messFieldsRU, modalFieldsInterfaceRU } from "@/lang/ru" 
import { cartEN, messFieldsEN, modalFieldsInterfaceEN } from "@/lang/en"    
import { useAppSelector } from "@/common/hooks/useRedux"
import { useRef, useState } from 'react'
import {func} from '../../../common/hooks/withMessage'
        
        
        
        
export function useCartLogic(succes:func, error:func, loading:func) {
         

  const [height, setHeight] = useState(42)
  const items = useAppSelector(state => state.cartItemsSlice.items)
  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)


   const interFaceLang = lang === 'EN' ? cartEN : cartRU
   const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
   const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU


   const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
      user_phone:yup.string().min(17, messFields.phone.min).max(19, messFields.phone.max).required(messFields.name.type_error),
      user_address: yup.string().min(3, messFields.address.min).required(messFields.name.type_error),
      user_type: yup.string().required(messFields.name.type_error)
    }) 

    const order = items.map((i,ind) => {
      if(i.variable){
        return `№ ${ind +1}: ${i.name['RU']} ${i.variable}: ${i.count}шт  <br/>`
      }else{
        return `№ ${ind +1}: ${i.name['RU']}: ${i.count}шт  <br/>`
      }
      
    }).join('')

    //https://server.xn--39-6kcqf9di.xn--p1ai/mail

   async function formSend(data: any) {
    loading()
    const response = await fetch('http://localhost:3001/mail', {
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
      succes()
    }
   
  }

  const totalSum = items.reduce((acc, i) => acc + (i.count * i.price), 0)
  const form = useRef(null)
   


 

    return {
        interFaceLang,
        order,
        items,
        btns,
        lang,
        totalSum,
        validationSchema,
        height,
        form,
        setHeight,
        formSend,
        modalFieldsInterface
    }
  
}