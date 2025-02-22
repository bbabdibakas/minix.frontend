import {Profile} from 'entities/Profile';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import AvatarPlaceholder from 'shared/assets/images/AvatarPlaceholder.png';
import * as styles from './PostProfile.module.scss';

export interface PostProfileProps {
    profileData?: Profile,
    isLoading: boolean,
    serverError?: string[]
}

const PostProfile = (props: PostProfileProps) => {
    const {
        profileData,
        isLoading,
        serverError
    } = props

    let content

    if (isLoading) {
        content = (
            <div className={styles.PostProfile}>
                <AppPageLoader/>
            </div>
        )
    } else if (serverError) {
        content = (
            <div className={styles.PostProfile}>
                {serverError[0]}
            </div>
        )
    } else {
        content = (
            <div className={styles.PostProfile}>
                <img
                    src={AvatarPlaceholder}
                    className={styles.avatar}
                    alt="Avatar"
                />
                <div className={styles.info}>
                    <div className={styles.name}>
                        {profileData?.name}
                    </div>
                    <div className={styles.username}>
                        {profileData?.username}
                    </div>
                </div>
            </div>
        )
    }

    return content
}

export default PostProfile;