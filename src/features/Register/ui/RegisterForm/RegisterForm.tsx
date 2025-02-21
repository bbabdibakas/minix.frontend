import {AppInput} from 'shared/ui/AppInput/AppInput';
import {useSelector} from 'react-redux';
import {getRegisterForm} from '../../model/selectors/getRegisterForm';
import {registerActions} from '../../model/slice/registerSlice';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {register} from '../../model/services/register';
import {getRegisterValidateErrors} from '../../model/selectors/getRegisterValidateErrors';
import {getRegisterServerErrors} from '../../model/selectors/getRegisterServerErrors';
import {ValidateRegisterFormError} from '../../model/types/RegisterState';
import {getRegisterIsLoading} from '../../model/selectors/getRegisterIsLoading';
import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import {routePath} from 'app/providers/AppRouter';
import {useNavigate} from 'react-router';
import * as styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        name,
        username,
        password
    } = useSelector(getRegisterForm)
    const validateErrors = useSelector(getRegisterValidateErrors)
    const serverErrors = useSelector(getRegisterServerErrors)
    const isLoading = useSelector(getRegisterIsLoading)

    const onChangeName = (value: string) => {
        dispatch(registerActions.setName(value))
    }

    const onChangeUsername = (value: string) => {
        dispatch(registerActions.setUsername(value))
    }

    const onChangePassword = (value: string) => {
        dispatch(registerActions.setPassword(value))
    }

    const onRegister = async () => {
        const response = await dispatch(register())
        if (response.meta.requestStatus === 'fulfilled') {
            await navigate(routePath.main)
        }
    }

    if (isLoading) {
        return (
            <div className={styles.RegisterForm}>
                <AppPageLoader/>
            </div>
        )
    }

    return (
        <div className={styles.RegisterForm}>
            <div className={styles.title}>
                Please enter your details
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
                value={name}
                placeholder={'Name'}
                onChange={onChangeName}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_NAME)}
            />
            <AppInput
                value={username}
                placeholder={'Username'}
                onChange={onChangeUsername}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={password}
                placeholder={'Password'}
                onChange={onChangePassword}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateRegisterFormError.INCORRECT_PASSWORD)}
            />
            <AppButton className={styles.button} onClick={() => void onRegister()}>
                Register
            </AppButton>
        </div>
    )
}

export default RegisterForm