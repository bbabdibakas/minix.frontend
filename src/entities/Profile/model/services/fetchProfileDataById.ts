import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile} from '../types/ProfileState';
import {handleThunkError} from 'shared/api/handleThunkError';

export const fetchProfileDataById = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string[]>
>(
    'profile/fetchProfileDataById',
    async (profileId, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi

        try {
            const response = await extra.api.get<Profile>(`/profiles/${profileId}`)
            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
