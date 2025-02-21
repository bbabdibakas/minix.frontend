import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile, profileActions} from 'entities/Profile';
import {getEditProfileForm} from '../selectors/getEditProfileForm';
import {validateProfileForm} from './validateProfileForm';
import {editProfileActions} from '../slice/editProfileSlice';
import {handleThunkError} from 'shared/api/handleThunkError';

export const updateProfileDataById = createAsyncThunk<
    Profile,
    undefined,
    ThunkConfig<string[]>
>(
    'profile/updateProfileDataById',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkApi

        const form = getEditProfileForm(getState())
        const errors = validateProfileForm(form)

        if (errors.length) {
            dispatch(editProfileActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        // TODO change type for ids, they must be string not number
        try {
            const response = await extra.api.put<Profile>(`/profiles/${String(form?.id)}`, form)
            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
