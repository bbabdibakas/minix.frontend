export enum ValidateRegisterFormError {
    INCORRECT_EMAIL = 'Incorrect email.',
    INCORRECT_NAME = 'Name must be more than 2 characters.',
    INCORRECT_USERNAME = 'Username must be more than 3 characters.',
    INCORRECT_PASSWORD = 'Password must be more than 8 characters.',
    SERVER_ERROR = 'Unknown server error.',
}

export interface RegisterForm {
    email: string
    name: string
    username: string
    password: string
}

export interface RegisterState {
    form: RegisterForm
    validateErrors?: ValidateRegisterFormError[]
}