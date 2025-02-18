import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, profileActions} from "entities/Profile";
import {ValidateProfileError} from "../types/EditProfileState";
import {getEditProfileForm} from "../selectors/getEditProfileForm";
import {validateProfileForm} from "./validateProfileForm";

export const updateProfileDataById = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileDataById',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkApi

        const form = getEditProfileForm(getState())
        const errors = validateProfileForm(form)

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>(`/profiles/${form?.id}`, form)

            if (!response.data) {
                throw new Error();
            }

            dispatch(profileActions.setProfileData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
