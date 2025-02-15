import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileState} from '../types/ProfileState';
import {fetchProfileDataById} from "../services/fetchProfileDataById";

const initialState: ProfileState = {
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataById.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true
            })
            .addCase(fetchProfileDataById.rejected, (state, action)=> {
                state.isLoading = false
                state.validateErrors = action.payload
            })
            .addCase(fetchProfileDataById.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.validateErrors = undefined;
                state.isLoading = false
                state.profileData = action.payload
            })
    }
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;