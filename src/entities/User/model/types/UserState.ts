export interface User {
    id: number
    name: string
    username: string
}

export interface UserData {
    user?: User
    accessToken?: string
    refreshToken?: string
}

export interface UserState {
    userData?: UserData,
    isUserInit: boolean
}