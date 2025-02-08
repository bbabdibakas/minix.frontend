import AppButton from "shared/ui/AppButton/AppButton";
import {userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import * as styles from './Sidebar.module.scss'
import {Link} from "react-router";

const Sidebar = () => {
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(userActions.removeUserData())
    }

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <Link to={'/'}>
                    Main
                </Link>
                <Link to={'/profile'}>
                    Profile
                </Link>
            </div>
            <AppButton onClick={onLogout}>
                Logout
            </AppButton>
        </div>
    )
}

export default Sidebar