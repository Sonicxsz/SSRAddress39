import { createSlice } from '@reduxjs/toolkit';


type language = 'RU' | 'EN'
interface languageI {
    language: language,
    btns: {
        btnClose: {
            RU: string,
            EN: string
        },
        btnSend: {
            RU: string,
            EN: string
        },
     
    },
    middle: boolean
}
const initialState: languageI  = {
    language: 'RU',
    btns: {
        btnClose: {
            RU: 'Закрыть',
            EN: 'Close',
        },
        btnSend: {
            RU: 'Отправить',
            EN: 'Send',
        },

    },
    middle: false,
}


const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage(state, action) {
            state.language = action.payload;
        },
        changeMidl(state, action) {
            state.middle = action.payload;
        },
    },
});

export const { changeLanguage, changeMidl } = languageSlice.actions;
export default languageSlice.reducer;
