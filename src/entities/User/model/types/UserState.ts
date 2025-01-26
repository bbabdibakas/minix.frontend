export interface User {
    id: number
    email: string
    name: string
    username: string
    isActivated: number
    activationLink: string
}

export interface UserState {
    userData?: User
}