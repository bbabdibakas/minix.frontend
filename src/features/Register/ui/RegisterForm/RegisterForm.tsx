import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {getRegisterForm} from "../../model/selectors/getRegisterForm";
import {registerActions} from "../../model/slice/registerSlice";
import AppButton from "shared/ui/AppButton/AppButton";
import {useEffect, useState} from "react";
import {register} from "../../model/services/register";
import {getRegisterValidateErrors} from "../../model/selectors/getRegisterValidateErrors";
import {ValidateRegisterFormError} from "../../model/types/RegisterState";
import * as styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const {
        email,
        name,
        username,
        password
    } = useSelector(getRegisterForm)
    const validateErrors = useSelector(getRegisterValidateErrors)

    const onChangeEmail = (value: string) => {
        dispatch(registerActions.setEmail(value))
    }

    const onChangeName = (value: string) => {
        dispatch(registerActions.setName(value))
    }

    const onChangeUsername = (value: string) => {
        dispatch(registerActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(registerActions.setPassword(value))
    }

    const onRegister = () => {
        if (isFormValid) {

            //@ts-expect-error починить потом
            dispatch(register())
        }
    }

    // проверка на заполнение формы
    const isFormFilled = () => {
        return (
            email.trim().length > 0 &&
            name.trim().length > 0 &&
            username.trim().length > 0 &&
            password.trim().length > 0
        );
    };

    useEffect(() => {
        setIsFormValid(isFormFilled());
    }, [email, name, username, password]);

    return (
        <div className={styles.RegisterForm}>
            <div className={styles.title}>
                Please enter your details
            </div>
            {validateErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            <AppInput
                value={email}
                placeholder={'Email'}
                onChange={onChangeEmail}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_EMAIL)}
            />
            <AppInput
                value={name}
                placeholder={'Name'}
                onChange={onChangeName}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_NAME)}
            />
            <AppInput
                value={username}
                placeholder={'Username'}
                onChange={onChangeUsername}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={password}
                placeholder={'Password'}
                onChange={onChangePassword}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_PASSWORD)}
            />
            <AppButton className={styles.button} onClick={onRegister} disabled={!isFormValid}>
                Register
            </AppButton>
        </div>
    )
}

export default RegisterForm