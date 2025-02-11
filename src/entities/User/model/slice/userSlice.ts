import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserData, UserState} from "../types/UserState";

const initialState: UserState = {
    isUserInit: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
            localStorage.setItem('USER_DATA', JSON.stringify(state.userData));
        },
        initUserData: (state) => {
            const userData = localStorage.getItem('USER_DATA')
            if (userData) {
                state.userData = JSON.parse(userData);
            }
            state.isUserInit = true;
        },
        removeUserData: (state) => {
            state.userData = undefined
            localStorage.removeItem('USER_DATA')
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;