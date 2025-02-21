import {LoginForm, ValidateLoginFormError} from '../types/LoginState';

export const validateForm = (form: LoginForm) => {
    const {
        username, password,
    } = form;

    const errors: ValidateLoginFormError[] = [];

    if (username.trim().length <= 3) {
        errors.push(ValidateLoginFormError.INCORRECT_USERNAME);
    }

    if (password.trim().length <= 8) {
        errors.push(ValidateLoginFormError.INCORRECT_PASSWORD);
    }

    return errors;
}