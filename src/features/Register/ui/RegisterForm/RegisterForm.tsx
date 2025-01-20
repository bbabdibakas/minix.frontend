import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {getRegisterForm} from "../../model/selectors/getRegisterForm";
import {registerActions} from "../../model/slice/registerSlice";
import AppButton from "shared/ui/AppButton/AppButton";
import {useEffect, useState} from "react";
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
            alert("Registered!");
        }
    }

    // проверка на заполнение формы
    const formFillCheck = () => {
        return (
            email.trim().length > 0 &&
            name.trim().length > 0 &&
            username.trim().length > 0 &&
            password.trim().length > 0
        );
    };

    useEffect(() => {
        setIsFormValid(formFillCheck());
    }, [email, name, username, password]);

    return (
        <div className={styles.RegisterForm}>
            <AppInput value={email} placeholder={'Email'} onChange={onChangeEmail}/>
            <AppInput value={name} placeholder={'Name'} onChange={onChangeName}/>
            <AppInput value={username} placeholder={'Username'} onChange={onChangeUsername}/>
            <AppInput value={password} placeholder={'Password'} onChange={onChangePassword} type={"password"}/>
            <AppButton className={styles.button} onClick={onRegister} disabled={!isFormValid}>
                Register
            </AppButton>
        </div>
    )
}

export default RegisterForm