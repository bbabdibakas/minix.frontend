import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getLoginForm} from "../../model/selectors/getLoginForm";
import {getLoginValidateErrors} from "../../model/selectors/getLoginValidateErrors";
import {getLoginServerErrors} from "../../model/selectors/getLoginServerErrors";
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
    const navigate = useNavigate();

    const {
        username,
        password
    } = useSelector(getLoginForm)
    const validateErrors = useSelector(getLoginValidateErrors)
    const serverErrors = useSelector(getLoginServerErrors)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = (value: string) => {
        dispatch(loginActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(loginActions.setPassword(value))
    }

    const onLogin = async () => {
        const response = await dispatch(loginByUsername())
        if (response.meta.requestStatus === 'fulfilled') {
            navigate(routePath.main)
        }
    }

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
            {serverErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
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
            <AppButton className={styles.button} onClick={onLogin}>
                Login
            </AppButton>
        </div>
    )
}

export default LoginForm