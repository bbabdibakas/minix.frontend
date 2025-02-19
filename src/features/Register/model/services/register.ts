import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getRegisterForm} from "features/Register/model/selectors/getRegisterForm";
import {validateForm} from "features/Register/model/services/validateForm";
import axios from "axios";
import {UserData, userActions} from "entities/User";
import {handleThunkError} from "shared/api/handleThunkError";
import {registerActions} from "../slice/registerSlice";

export const register = createAsyncThunk<
    UserData,
    void,
    ThunkConfig<string[]>
>(
    'auth/register',
    async (_, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi;

        const form = getRegisterForm(getState())
        const errors = validateForm(form)

        if (errors.length) {
            dispatch(registerActions.setValidateErrors(errors))
            return rejectWithValue(['Validation error']);
        }

        try {
            const response = await axios.post<UserData>('http://localhost:8000/api/registration', form)

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
