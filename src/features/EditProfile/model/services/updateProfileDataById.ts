import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, profileActions} from "entities/Profile";
import {getEditProfileForm} from "../selectors/getEditProfileForm";
import {validateProfileForm} from "./validateProfileForm";
import {editProfileActions} from "../slice/editProfileSlice";
import {handleThunkError} from "shared/api/handleThunkError";

export const updateProfileDataById = createAsyncThunk<
    Profile,
    void,
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

        try {
            const response = await extra.api.put<Profile>(`/profiles/${form?.id}`, form)

            if (!response.data) {
                throw new Error();
            }

            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(handleThunkError(e));
        }
    },
);
