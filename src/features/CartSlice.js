import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],

}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_CART: (state, action) => {
            return {
                ...state,
                items: [{ ...action.payload, qty: 1 }, ...state.items]
            }
        },
        INCREASE: (state, action) => {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
                ),
            }
        },
        DECREASE: (state, action) => {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
                ),
            }
        },
        DLT_CART: (state, action) => {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            }
        }

    },
    extraReducers: (builder) => {


    },
});
export const { ADD_CART, INCREASE, DECREASE, DLT_CART } = CartSlice.actions;
export default CartSlice.reducer;

