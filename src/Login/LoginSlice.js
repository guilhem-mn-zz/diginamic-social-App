import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "./LoginAPI";

const initialState = {
    user: {},
    password: '',
    email: '',
    token: false,
    error: false,
}

export const UserLoginAsync = createAsyncThunk(
    'user/login',
    async (user) => await UserLogin(user)
);

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    //
    changeInputValue: (state, action) => {
        state[action.payload.inputName] = action.payload.inputValue;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
    clearForm: (state) => {
        return {
            ...state,
            email: '',
            password: '',
            error: false            
        }
    }
},
extraReducers: (builder) => {
    builder
      .addCase(UserLoginAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      });
    },
});

export const {
    changeInputValue,
    setError,
    clearForm
} = LoginSlice.actions;

export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;
export const selectToken = (state) => state.login.token;
export const selectUser = (state) => state.login.user;
export const selectError = (state) => state.login.error;

export default LoginSlice.reducer;