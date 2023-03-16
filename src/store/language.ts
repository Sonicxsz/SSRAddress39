import { createSlice } from "@reduxjs/toolkit";


const languageSlice = createSlice({
        name: 'language',
        initialState:{ 
           language: 'RU',
           btns: {
            btnClose: {
              'RU': 'Закрыть',
              'EN': 'Close'
            },
            btnSend: {
              'RU': 'Отправить',
              'EN': 'Send'
            }
           }
            
        },
        reducers: {
            changeLanguage(state, action){
                state.language = action.payload
            }
        },
       
})

 
export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer