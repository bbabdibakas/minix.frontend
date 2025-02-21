import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RegisterState, ValidateRegisterFormError} from '../types/RegisterState';
import {register} from '../services/register';

const initialState: RegisterState = {
    form: {
        name: '',
        username: '',
        password: ''
    },
    isLoading: false
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.form.name = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.form.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.form.password = action.payload;
        },
        setValidateErrors: (state, action: PayloadAction<ValidateRegisterFormError[]>) => {
            state.validateErrors = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.serverErrors = undefined;
                state.validateErrors = undefined;
                state.isLoading = true
            })
            .addCase(register.rejected, (state, action) => {
                state.serverErrors = action.payload;
                state.isLoading = false
            })
            .addCase(register.fulfilled, (state) => {
                state.serverErrors = undefined;
                state.validateErrors = undefined;
                state.isLoading = false
            })
    }
});

export const {actions: registerActions} = registerSlice;
export const {reducer: registerReducer} = registerSlice;