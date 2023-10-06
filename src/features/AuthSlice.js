import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authservice from "./AuthService";

const userExist = JSON.parse(localStorage.getItem("user"));


const initialState = {
    user: userExist ? userExist : null,
    isloading: false,
    issuccess: false,
    iserror: false,
    message: "",
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        remove: (state) => {
            return {
                ...state,
                user: "",
                isloading: false,
                issuccess: false,
                iserror: false,
                message: "logedout",

            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerauth.pending, (state, action) => {
                state.isloading = true;
            })
            .addCase(registerauth.fulfilled, (state, action) => {
                state.isloading = false;
                state.iserror = false;
                state.issuccess = true;
                state.user = action.payload;
                state.message = "";
            })
            .addCase(registerauth.rejected, (state, action) => {
                state.isloading = false;
                state.issuccess = false;
                state.iserror = true;
                state.user = null;
                state.message = "User Not Found";
            })
            .addCase(logindata.pending, (state) => {
                state.isloading = true;
            })
            .addCase(logindata.fulfilled, (state,action) => {
                state.isloading = false;
                state.iserror = false;
                state.issuccess = true;
                state.user = action.payload;
                state.message = "";
            })
            .addCase(logindata.rejected, (state) => {
                state.isloading = false;
                state.issuccess = false;
                state.iserror = true;
                state.user = null;
                state.message = "Something wrong";
            })


    },
})

export const { remove } = AuthSlice.actions;

export default AuthSlice.reducer;

export const registerauth = createAsyncThunk("REGISTER/USER", (async (formData) => {

    try {
        const data = await authservice.register(formData);
        return data;
    } catch (error) {
        console.log(error);
    }
}
));


export const logindata = createAsyncThunk("LOGIN/USER", (async (formData) => {

    try {
        const data = await authservice.loging(formData);
        return data;
    } catch (error) {
        console.log(error);
    }
}
));
