import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserState} from "entities/User";

const initialState: UserState = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userDate = action.payload;
        },
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;