import { createSlice } from "@reduxjs/toolkit";


const controlSlice = createSlice({
    name: 'language',
    initialState: {
        modalCarreer: false,
        modalBooking: false,
        modalDelevery: false,
        menuModal: {
            visible: false,
            type: ''
        },
        toContact: false,
        modalCart: false
    },
    reducers: {
        setModalCarreer(state, action) {
            state.modalCarreer = action.payload;
        },
        setMenuModal(state, action){
          state.menuModal = action.payload
        },
        setModalBooking(state, action) {
            state.modalBooking = action.payload;
        },
        setModalDelevery(state, action) {
            state.modalDelevery = action.payload;
        },
        setToContact(state, action) {
            state.toContact = action.payload
        },
        setCartModal(state, action){
            state.modalCart = action.payload
        }
    },
});

export const { setModalDelevery, setModalBooking, setModalCarreer, setToContact, setCartModal,setMenuModal } = controlSlice.actions;
export default controlSlice.reducer;

