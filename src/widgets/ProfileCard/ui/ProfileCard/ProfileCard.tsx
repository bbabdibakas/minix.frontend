import {AppPageLoader} from "shared/ui/AppPageLoader/AppPageLoader";
import {Profile, ValidateProfileError} from "entities/Profile";
import AvatarPlaceholder from "shared/assets/images/AvatarPlaceholder.png"
import * as styles from "./ProfileCard.module.scss";

export interface ProfileCardProps {
    profileData?: Profile,
    isLoading: boolean,
    validateErrors?: ValidateProfileError[]
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        profileData,
        isLoading,
        validateErrors
    } = props

    let content

    if (isLoading) {
        content = (
            <div className={styles.ProfileCard}>
                <AppPageLoader/>
            </div>
        )
    } else if (validateErrors) {
        content = (
            <div className={styles.ProfileCard}>
                {validateErrors[0]}
            </div>
        )
    } else {
        content = (
            <div className={styles.ProfileCard}>
                <div className={styles.cover}/>
                <div className={styles.avatarWrapper}>
                    <img
                        src={AvatarPlaceholder}
                        className={styles.avatar}
                        alt="Avatar"
                    />
                </div>
                <div className={styles.info}>
                    <div className={styles.name}>
                        {profileData?.name}
                    </div>
                    <div className={styles.username}>
                        {profileData?.username}
                    </div>
                    <div className={styles.bio}>
                        {profileData?.bio}
                    </div>
                </div>
            </div>
        )
    }

    return content
}

export default ProfileCard;