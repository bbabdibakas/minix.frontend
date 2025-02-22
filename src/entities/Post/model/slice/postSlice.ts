import {Post, PostState} from '../types/PostState';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPostDataById} from '../services/fetchPostDataById';

const initialState: PostState = {
    isLoading: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostDataById.pending, (state) => {
                state.serverError = undefined;
                state.isLoading = true
            })
            .addCase(fetchPostDataById.rejected, (state, action) => {
                state.isLoading = false
                state.serverError = action.payload
            })
            .addCase(fetchPostDataById.fulfilled, (state, action: PayloadAction<Post>) => {
                state.serverError = undefined;
                state.isLoading = false
                state.postData = action.payload
            })
    }
})

export const {actions: postActions} = postSlice;
export const {reducer: postReducer} = postSlice;