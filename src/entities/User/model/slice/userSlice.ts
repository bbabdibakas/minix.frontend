import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserState} from "entities/User";

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            localStorage.setItem('USER_DATA', JSON.stringify(state.userData));
        },
        initUserData: (state) => {
            const userData = localStorage.getItem('USER_DATA')
            if (userData) {
                state.userData = JSON.parse(userData);
            }
        },
        removeUserData: (state) => {
            state.userData = undefined
            localStorage.removeItem('USER_DATA')
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;