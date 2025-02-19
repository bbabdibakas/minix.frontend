import {Profile} from "entities/Profile";

export enum ValidateProfileError {
    NO_DATA = 'At least one field is required',
    INCORRECT_NAME = 'Name must be more than 3 characters.',
    INCORRECT_USERNAME = 'Username must be more than 3 characters.',
    INCORRECT_BIO = 'Bio must be less than 32 characters.',
}

export interface EditProfileState {
    profileForm?: Profile
    isLoading: boolean
    validateErrors?: ValidateProfileError[]
    serverErrors?: string[]
}