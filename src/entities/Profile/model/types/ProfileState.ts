export interface Profile {
    id?: string
    name?: string
    username?: string
    bio?: string
}

export interface ProfileState {
    profileData?: Profile
    isLoading: boolean
    serverError?: string[]
}