import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile, serverError} from "../types/ProfileState";

export const fetchProfileDataById = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<serverError[]>
>(
    'profile/fetchProfileDataById',
    async (profileId, thunkApi) => {
        const {extra, rejectWithValue} = thunkApi

        try {
            const response = await extra.api.get<Profile>(`/profiles/${profileId}`)

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([serverError.SERVER_ERROR]);
        }
    },
);
