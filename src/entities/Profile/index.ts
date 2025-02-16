import {Profile, ProfileState, ValidateProfileError} from "./model/types/ProfileState"
import {profileActions, profileReducer} from "./model/slice/profileSlice"
import {getProfileData} from "./model/selectors/getProfileData"
import {getProfileIsLoading} from "./model/selectors/getProfileIsLoading"
import {getProfileValidateErrors} from "./model/selectors/getProfileValidateErrors"
import {fetchProfileDataById} from "./model/services/fetchProfileDataById"

export type {
    Profile,
    ProfileState,
    ValidateProfileError
}

export {
    profileActions,
    profileReducer,
    getProfileData,
    getProfileIsLoading,
    getProfileValidateErrors,
    fetchProfileDataById
}