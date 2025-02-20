export enum serverError {
    SERVER_ERROR = 'Unknown server error.',
}

export interface Profile {
    id?: number
    name?: string
    username?: string
    bio?: string
}

export interface ProfileState {
    profileData?: Profile
    isLoading: boolean
    serverError?: serverError[]
}