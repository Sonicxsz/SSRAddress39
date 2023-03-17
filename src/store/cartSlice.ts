import { createSlice } from '@reduxjs/toolkit';
import { calcTotalPrice, calcTotal } from '../common/utils/calc';

export interface cartItem {
    img: string;
    name: {
        EN: string;
        RU: string;
    };
    variable: string | null;
    price: number;
    id: number;
    count: number;
}

interface CalcSlice {
    items: cartItem[];
    totalPrice: number | null;
    totalCount: number | null;
}

const initialState: CalcSlice = {
    items: [],
    totalPrice: null,
    totalCount: null,
};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem(state, action) {
            const exsist = state.items.find(
                (obj) => obj.id === action.payload.id,
            );
            if (exsist) {
                exsist.count++;
            } else {
                state.items.push(action.payload);
            }
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotal(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((i) => i.id !== action.payload.id);
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotal(state.items);
        },
        decItem(state, action) {
            const exsist = state.items.find(
                (obj) => obj.id === action.payload.id,
            );
            if (exsist) {
                if (exsist.count > 1) {
                    exsist.count--;
                }
            }

            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotal(state.items);
        },
        incItem(state, action) {
            const exsist = state.items.find(
                (obj) => obj.id === action.payload.id,
            );
            if (exsist) {
                if (exsist.count) {
                    exsist.count++;
                }
            }
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotal(state.items);
        },

        clearCart(state) {
            state.items = [];
            state.totalPrice = calcTotalPrice(state.items);
            state.totalCount = calcTotal(state.items);
        },
    },
});

export const { addItem, decItem, removeItem, incItem, clearCart } =
    cartItemsSlice.actions;
export default cartItemsSlice.reducer;
