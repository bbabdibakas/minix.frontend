import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile";
import * as styles from "./ProfileCard.module.scss";

const ProfileCard = () => {
    const profileData = useSelector(getProfileData)

    return (
        <div className={styles.ProfileCard}>
            <div className={styles.cover}/>
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

export default ProfileCard;