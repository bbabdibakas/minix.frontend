export interface Profile {
    id: number
    name: string
    username: string
    bio: string
}

export interface ProfileState {
    profileData?: Profile
}