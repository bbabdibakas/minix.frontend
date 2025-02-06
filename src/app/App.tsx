import {RegisterForm} from "features/Register";
import {useSelector} from "react-redux";
import {getUserData, userActions} from "entities/User";
import {useEffect, useState} from "react";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import AppButton, {AppButtonTheme} from "shared/ui/AppButton/AppButton";
import {LoginModal} from "features/Login";
import {Sidebar} from "widgets/Sidebar";
import * as styles from "./App.module.scss"

const App = () => {
    const dispatch = useAppDispatch()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const userData = useSelector(getUserData)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        dispatch(userActions.initUserData())
    }, [])

    if (userData) {
        return (
            <div className="wrapper">
                <div className="container">
                    <Sidebar/>
                    <div className="page">
                        Hello world
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="authPage">
                <RegisterForm/>
                <div className={styles.form}>
                    <div className={styles.title}>
                        Already have an account?
                        <AppButton
                            theme={AppButtonTheme.TEXT}
                            onClick={onModalOpen}
                            className={styles.button}
                        >
                            Sign in
                        </AppButton>
                    </div>
                    {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onModalClose}/>}
                </div>
            </div>
        </div>
    )
}

export default App;