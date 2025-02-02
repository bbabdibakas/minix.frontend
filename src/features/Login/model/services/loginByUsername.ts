import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ValidateLoginFormError} from "../types/LoginState";
import {getLoginForm} from "../selectors/getLoginForm";
import {validateForm} from "./validateForm";
import axios from "axios";
import {UserData, userActions} from "entities/User";

export const loginByUsername = createAsyncThunk<
    UserData,
    void,
    ThunkConfig<ValidateLoginFormError[]>
>(
    'auth/loginByUsername',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getLoginForm(getState())
        const errors = validateForm(form)

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await axios.post<UserData>('http://localhost:8000/api/loginByUsername', form)

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateLoginFormError.SERVER_ERROR]);
        }
    },
);
