import * as yup from 'yup'
import { cartRU } from "@/lang/ru" 
import { cartEN } from "@/lang/en"    
import { useAppSelector } from "@/common/hooks/useRedux"
import { useRef, useState } from 'react'
        
        
        
        
        
export function useCartLogic(succes:boolean, error:boolean, loading:boolean) {
            
  const [height, setHeight] = useState(42)
  const items = useAppSelector(state => state.cartItemsSlice.items)
  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)


   const interFaceLang = lang === 'EN' ? cartEN : cartRU

  const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, messFields.name.min[lang]).matches(/^[^\d]+$/, messFields.name.type[lang]).typeError(messFields.name.type_error[lang]).required(messFields.required[lang]),
      user_phone:yup.string().min(17, messFields.phone.min[lang]).max(17, messFields.phone.max[lang]).required(messFields.name.type_error[lang]),
      user_address: yup.string().min(3, messFields.address.min[lang]).required(messFields.name.type_error[lang]),
      user_type: yup.string().required(messFields.name.type_error[lang])
    }) 


  const order = items.map((i,ind) => {
    if(i.variable){
      return `№ ${ind +1}: ${i.name['RU']} ${i.variable}: ${i.count}шт  <br/>`
    }else{
      return `№ ${ind +1}: ${i.name['RU']}: ${i.count}шт  <br/>`
    }
    
  }).join('')


  const totalSum = items.reduce((acc, i) => acc + (i.count * i.price), 0)
  const form = useRef(null)
    ///Оптимизировать 
    async function formSend(ref) {
      loading()
      if(ref){
        const data = new FormData(ref.current)
        const response = await fetch('phpmailer/cart.php', {
          method: 'POST',
          body: data
        })
        if(!response.ok){
          error()
      }
      
      }else{
        succes()
      }
      
    }

    return {
        interFaceLang,
        items,
        btns,
        lang,
        totalSum,
        validationSchema,

    }
  
}