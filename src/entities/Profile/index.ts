import {getProfileData} from "./model/selectors/getProfileData"
import {profileActions, profileReducer} from "./model/slice/profileSlice"
import {Profile, ProfileState} from "./model/types/ProfileState"
import ProfileCard from "./ui/ProfileCard/ProfileCard"

export type {
    Profile,
    ProfileState
}

export {
    getProfileData,
    profileActions,
    profileReducer,
    ProfileCard
}