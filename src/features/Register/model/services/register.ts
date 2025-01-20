import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ValidateRegisterFormError} from "features/Register/model/types/RegisterState";
import {getRegisterForm} from "features/Register/model/selectors/getRegisterForm";
import {validateForm} from "features/Register/model/services/validateForm";


export const register = createAsyncThunk<
    string,
    void,
    ThunkConfig<ValidateRegisterFormError[]>
>(
    'auth/register',
    async (_, thunkApi) => {
        const {rejectWithValue, getState} = thunkApi;

        const form = getRegisterForm(getState())
        const errors = validateForm(form)

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            //здесь будет запрос на регистрацию на сервер

            return 'registered';
        } catch (e) {
            return rejectWithValue([ValidateRegisterFormError.SERVER_ERROR]);
        }
    },
);
