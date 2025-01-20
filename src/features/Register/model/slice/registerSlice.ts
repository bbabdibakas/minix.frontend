import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RegisterState} from "../types/RegisterState";

const initialState: RegisterState = {
    form: {
        email: '',
        name: '',
        username: '',
        password: ''
    }
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.form.email = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.form.name = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.form.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.form.password = action.payload;
        },
    },
});

export const {actions: registerActions} = registerSlice;
export const {reducer: registerReducer} = registerSlice;