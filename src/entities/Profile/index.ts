import {Profile, ProfileState} from './model/types/ProfileState'
import {profileActions, profileReducer} from './model/slice/profileSlice'
import {getProfileData} from './model/selectors/getProfileData'
import {getProfileIsLoading} from './model/selectors/getProfileIsLoading'
import {fetchProfileDataById} from './model/services/fetchProfileDataById'
import {getProfileServerError} from './model/selectors/getProfileServerError'

export type {
    Profile,
    ProfileState,
}

export {
    profileActions,
    profileReducer,
    getProfileData,
    getProfileIsLoading,
    getProfileServerError,
    fetchProfileDataById,
}