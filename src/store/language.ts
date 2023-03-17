import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
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
    },
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
