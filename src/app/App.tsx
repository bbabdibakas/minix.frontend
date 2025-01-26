import {RegisterForm} from "features/Register";
import {useSelector} from "react-redux";
import {getUserData, userActions} from "entities/User";
import {useEffect, useState} from "react";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import AppButton from "shared/ui/AppButton/AppButton";
import {LoginForm} from "features/Login";

const App = () => {
    const dispatch = useAppDispatch()
    const [isHasAnAccount, setIsHasAnAccount] = useState<boolean>(false)
    const userData = useSelector(getUserData)

    const onLogout = () => {
        dispatch(userActions.removeUserData())
    }
    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    if (userData) {
        return (
            <div className="wrapper">
                <div className="container">
                    <div>
                        Welcome to the home page.
                    </div>
                    <AppButton onClick={onLogout}>
                        Logout
                    </AppButton>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="container">
                {isHasAnAccount ? <LoginForm/> : <RegisterForm/>}
                {isHasAnAccount ? "Don't have an account?" : 'Already have an account?'}
                <AppButton onClick={() => setIsHasAnAccount(!isHasAnAccount)}>
                    {isHasAnAccount ? 'Register' : 'Login' }
                </AppButton>
            </div>
        </div>
    )
}

export default App;