import { createSlice } from "@reduxjs/toolkit";


const controlSlice = createSlice({
    name: 'language',
    initialState: {
        modalCarreer: false,
        modalBooking: false,
        modalDelevery: false,
        toContact: false
    },
    reducers: {
        setModalCarreer(state, action) {
            state.modalCarreer = action.payload;
        },
        setModalBooking(state, action) {
            state.modalBooking = action.payload;
        },
        setModalDelevery(state, action) {
            state.modalDelevery = action.payload;
        },
        setToContact(state, action) {
            state.toContact = action.payload
        }
    },
});

export const { setModalDelevery, setModalBooking, setModalCarreer, setToContact } = controlSlice.actions;
export default controlSlice.reducer;

