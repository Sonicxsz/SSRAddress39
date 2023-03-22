import * as yup from 'yup'
import { cartRU, messFieldsRU, modalFieldsInterfaceRU } from "@/lang/ru" 
import { cartEN, messFieldsEN, modalFieldsInterfaceEN } from "@/lang/en"    
import { useAppSelector } from "@/common/hooks/useRedux"
import { useRef, useState } from 'react'
  
        
        
        
        
export function useCartLogic(succes:boolean, error:boolean, loading:boolean) {
            
  const [height, setHeight] = useState(42)
  const items = useAppSelector(state => state.cartItemsSlice.items)
  const lang = useAppSelector(state => state.languageSlice.language)
  const btns = useAppSelector(state => state.languageSlice.btns)


   const interFaceLang = lang === 'EN' ? cartEN : cartRU
   const messFields = lang === 'EN' ? messFieldsEN : messFieldsRU
   const modalFieldsInterface = lang === 'EN' ? modalFieldsInterfaceEN : modalFieldsInterfaceRU


   const validationSchema = yup.object().shape({
      user_name: yup.string().min(3, messFields.name.min).matches(/^[^\d]+$/, messFields.name.type).typeError(messFields.name.type_error).required(messFields.required),
      user_phone:yup.string().min(17, messFields.phone.min).max(17, messFields.phone.max).required(messFields.name.type_error),
      user_address: yup.string().min(3, messFields.address.min).required(messFields.name.type_error),
      user_type: yup.string().required(messFields.name.type_error)
    }) 





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
        height,
        form,
        setHeight,
        formSend,
        modalFieldsInterface
    }
  
}