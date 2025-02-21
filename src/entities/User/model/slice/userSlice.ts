import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData, UserState} from '../types/UserState';
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localstorage';

const initialState: UserState = {
    isUserInit: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(state.userData));
        },
        initUserData: (state) => {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
            if (userData) {
                // I'm sure that JSON.parse(userData) returns UserData type and I don't want to create validation service for that :)
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                state.userData = JSON.parse(userData);
            }
            state.isUserInit = true;
        },
        removeUserData: (state) => {
            state.userData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;