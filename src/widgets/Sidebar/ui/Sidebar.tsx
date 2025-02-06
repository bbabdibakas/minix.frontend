import AppButton from "shared/ui/AppButton/AppButton";
import {userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import * as styles from './Sidebar.module.scss'

const Sidebar = () => {
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(userActions.removeUserData())
    }

    return (
        <div className={styles.Sidebar}>
            <div className={styles.links}>
                <a href={'/'}>Main</a>
                <a href={'/'}>Profile</a>
                <a href={'/'}>Community</a>
                <a href={'/'}>Bookmark</a>
            </div>
            <AppButton onClick={onLogout}>
                Logout
            </AppButton>
        </div>
    )
}

export default Sidebar