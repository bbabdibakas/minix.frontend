export interface User {
    id: number
    email: string
    name: string
    username: string
    isActivated: boolean
    activationLink: string
}

export interface UserState {
    userData?: User
}