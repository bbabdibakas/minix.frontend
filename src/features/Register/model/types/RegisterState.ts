export enum ValidateRegisterFormError {
    INCORRECT_NAME = 'Name must be more than 2 characters.',
    INCORRECT_USERNAME = 'Username must be more than 3 characters.',
    INCORRECT_PASSWORD = 'Password must be more than 8 characters.',
}

export interface RegisterForm {
    name: string
    username: string
    password: string
}

export interface RegisterState {
    form: RegisterForm,
    isLoading: boolean
    validateErrors?: ValidateRegisterFormError[]
    serverErrors?: string[]
}