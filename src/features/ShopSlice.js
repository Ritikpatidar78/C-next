import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Shopservice from "./ShopService";

const initialState = {
    isloading: false,
    issuccess: false,
    iserror: false,
    message: "",
    datas: null,

}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetching.pending, (state) => {
                state.isloading = true;
                state.issuccess = false;
                state.iserror = false;
                state.message = "";
                state.datas = null;
            })
            .addCase(fetching.fulfilled, (state, action) => {
                state.isloading = false;
                state.issuccess = true;
                state.iserror = false;
                state.message = "fulfilled";
                state.datas = action.payload;
            })
            .addCase(fetching.rejected, (state, action) => {
                state.isloading = false;
                state.issuccess = false;
                state.iserror = true;
                state.message = "Something Went Wrong";
                state.datas = null;
            })

    },
});

export default shopSlice.reducer;

export const fetching = createAsyncThunk("FETCH/PRODUCT", async () => {
    try {
        const data = await Shopservice.fetchdata();
        return data;
    } catch (error) {
        console.log(error);
    }
});