import {AppInput} from "shared/ui/AppInput/AppInput";
import {useDispatch, useSelector} from "react-redux";
import {getRegisterForm} from "../../model/selectors/getRegisterForm";
import {registerActions} from "../../model/slice/registerSlice";
import * as styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const dispatch = useDispatch();

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

    return (
        <div className={styles.RegisterForm}>
            <AppInput value={email} placeholder={'Email'} onChange={onChangeEmail}/>
            <AppInput value={name} placeholder={'Name'} onChange={onChangeName}/>
            <AppInput value={username} placeholder={'Username'} onChange={onChangeUsername}/>
            <AppInput value={password} placeholder={'Password'} onChange={onChangePassword}/>
        </div>
    )
}

export default RegisterForm