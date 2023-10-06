import { configureStore } from "@reduxjs/toolkit";
import shopreducer from "./features/ShopSlice"
import cartreducer from "./features/CartSlice"
import AuthSlice from "./features/AuthSlice";

const store = configureStore({
    reducer:{
        shop:shopreducer,
        cart:cartreducer,
        auth: AuthSlice,

    }
})

export default store;