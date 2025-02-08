import AppButton from "shared/ui/AppButton/AppButton";
import {userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import * as styles from './Sidebar.module.scss'
import AppLink from "shared/ui/AppLink/AppLink";
import MainPageIcon from "shared/assets/icons/MainPageIcon.svg"
import ProfilePageIcon from "shared/assets/icons/ProfilePageIcon.svg"
import MainPageActiveIcon from "shared/assets/icons/MainPageActiveIcon.svg"
import ProfilePageActiveIcon from "shared/assets/icons/ProfilePageActiveIcon.svg"
import {useLocation} from "react-router";

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    const onLogout = () => {
        dispatch(userActions.removeUserData())
    }

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <AppLink to={'/'} className={styles.link}>
                    {location.pathname === '/' ? <MainPageActiveIcon/> : <MainPageIcon />}
                    <div className={styles.item}>
                        Main
                    </div>
                </AppLink>
                <AppLink to={'/profile'} className={styles.link}>
                    {location.pathname === '/profile' ? <ProfilePageActiveIcon/> : <ProfilePageIcon />}
                    <div className={styles.item}>
                        Profile
                    </div>
                </AppLink>
            </div>
            <AppButton onClick={onLogout}>
                Logout
            </AppButton>
        </div>
    )
}

export default Sidebar