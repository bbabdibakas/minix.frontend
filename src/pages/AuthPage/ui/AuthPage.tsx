import {RegisterForm} from 'features/Register';
import {AppButton, AppButtonTheme} from 'shared/ui/AppButton/AppButton';
import {LoginModal} from 'features/Login';
import {useState} from 'react';
import * as styles from './AuthPage.module.scss';

const AuthPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="wrapper">
            <div className="AuthPage">
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

export default AuthPage