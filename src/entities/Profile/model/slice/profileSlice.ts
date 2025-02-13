import {createSlice} from "@reduxjs/toolkit";
import {ProfileState} from '../types/ProfileState';

const initialState: ProfileState = {
    profileData: {
        id: 1,
        name: 'Bekzat Abdibakas',
        username: 'babdibakas',
        bio: 'Егошнего/Ихний'
    }
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;