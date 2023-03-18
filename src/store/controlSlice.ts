import { createSlice } from "@reduxjs/toolkit";


const controlSlice = createSlice({
    name: 'language',
    initialState: {
        modalCarreer: false,
        modalBooking: false,
        modalDelevery: false
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
    },
});

export const { setModalDelevery, setModalBooking, setModalCarreer } = controlSlice.actions;
export default controlSlice.reducer;

