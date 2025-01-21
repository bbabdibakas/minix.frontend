export interface User {
    id: string
    email: string
    name: string
    username: string
}

export interface UserState {
    userDate?: User
}