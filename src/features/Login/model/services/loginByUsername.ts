import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getLoginForm} from '../selectors/getLoginForm';
import {validateForm} from './validateForm';
import axios from 'axios';
import {UserData, userActions} from 'entities/User';
import {handleThunkError} from 'shared/api/handleThunkError';
import {loginActions} from '../slice/loginSlice';

export const loginByUsername = createAsyncThunk<
    UserData,
    undefined,
    ThunkConfig<string[]>
>(
    'auth/loginByUsername',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateForm(form)

        if (errors.length) {
            dispatch(loginActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await axios.post<UserData>('http://localhost:8000/api/loginByUsername', form)

            dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
