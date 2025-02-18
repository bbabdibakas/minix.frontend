import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditProfileState} from "../types/EditProfileState";
import {Profile} from "entities/Profile";
import {updateProfileDataById} from "../services/updateProfileDataById";

const initialState: EditProfileState = {
    isLoading: false
}

export const editProfileSlice = createSlice({
    name: 'editProfile',
    initialState,
    reducers: {
        updateProfileForm: (state, action: PayloadAction<Profile>) => {
            state.profileForm = {
                ...state.profileForm,
                ...action.payload,
            }
        },
        initProfileForm: (state, action: PayloadAction<Profile>) => {
            state.profileForm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileDataById.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true
            })
            .addCase(updateProfileDataById.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
            .addCase(updateProfileDataById.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.validateErrors = undefined;
                state.isLoading = false
                state.profileForm = action.payload
            })
    }
})

export const {actions: editProfileActions} = editProfileSlice;
export const {reducer: editProfileReducer} = editProfileSlice;