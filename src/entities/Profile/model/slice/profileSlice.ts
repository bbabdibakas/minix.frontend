import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileState} from '../types/ProfileState';
import {fetchProfileDataById} from "../services/fetchProfileDataById";

const initialState: ProfileState = {
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.profileData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataById.pending, (state) => {
                state.serverError = undefined;
                state.isLoading = true
            })
            .addCase(fetchProfileDataById.rejected, (state, action)=> {
                state.isLoading = false
                state.serverError = action.payload
            })
            .addCase(fetchProfileDataById.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.serverError = undefined;
                state.isLoading = false
                state.profileData = action.payload
            })
    }
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;