import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ValidateRegisterFormError} from "features/Register/model/types/RegisterState";
import {getRegisterForm} from "features/Register/model/selectors/getRegisterForm";
import {validateForm} from "features/Register/model/services/validateForm";
import axios from "axios";
import {UserData, userActions} from "entities/User";

export const register = createAsyncThunk<
    UserData,
    void,
    ThunkConfig<ValidateRegisterFormError[]>
>(
    'auth/register',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getRegisterForm(getState())
        const errors = validateForm(form)

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await axios.post<UserData>('http://localhost:8000/api/registration', form)

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateRegisterFormError.SERVER_ERROR]);
        }
    },
);
