import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getLoginForm} from "../../model/selectors/getLoginForm";
import {getLoginValidateErrors} from "../../model/selectors/getLoginValidateErrors";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading";
import {loginActions} from "../../model/slice/loginSlice";
import {ValidateLoginFormError} from "../../model/types/LoginState";
import {AppInput} from "shared/ui/AppInput/AppInput";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {loginByUsername} from "../../model/services/loginByUsername";
import {useNavigate} from "react-router";
import {routePath} from "app/providers/AppRouter";
import {AppPageLoader} from "shared/ui/AppPageLoader/AppPageLoader";
import * as styles from "./LoginForm.module.scss";

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const navigate = useNavigate();

    const {
        username,
        password
    } = useSelector(getLoginForm)
    const validateErrors = useSelector(getLoginValidateErrors)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onLogin = async () => {
        if (isFormValid) {
            const response = await dispatch(loginByUsername())
            if (response.meta.requestStatus === 'fulfilled') {
                navigate(routePath.main)
            }
        }
    }

    const isFormFilled = () => {
        // проверка на загрузку
        if (isLoading) {
            return !isLoading
        }
        // проверка на заполнение формы
        return (
            username.trim().length > 0 &&
            password.trim().length > 0
        );
    };

    useEffect(() => {
        setIsFormValid(isFormFilled());
    }, [username, password, isLoading]);

    if (isLoading) {
        return (
            <div className={styles.LoginForm}>
                <AppPageLoader/>
            </div>
        )
    }

    return (
        <div className={styles.LoginForm}>
            <div className={styles.title}>
                Welcome back
            </div>
            {validateErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            <AppInput
                value={username}
                placeholder={'Username'}
                onChange={onChangeUsername}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={password}
                placeholder={'Password'}
                onChange={onChangePassword}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateLoginFormError.INCORRECT_PASSWORD)}
            />
            <AppButton className={styles.button} onClick={onLogin} disabled={!isFormValid}>
                Login
            </AppButton>
        </div>
    )
}

export default LoginForm