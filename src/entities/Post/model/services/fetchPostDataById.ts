import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Post} from '../types/PostState';
import {handleThunkError} from 'shared/api/handleThunkError';

export const fetchPostDataById = createAsyncThunk<
    Post,
    string,
    ThunkConfig<string[]>
>(
    'post/fetchPostDataById',
    async (postId, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi

        try {
            const response = await extra.api.get<Post>(`/posts/${postId}`)
            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
