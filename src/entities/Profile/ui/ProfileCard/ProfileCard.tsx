import {useSelector} from "react-redux";
import {AppPageLoader} from "shared/ui/AppPageLoader/AppPageLoader";
import {getProfileData} from "../../model/selectors/getProfileData";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading";
import {getProfileValidateErrors} from "../../model/selectors/getProfileValidateErrors";
import {fetchProfileDataById} from "../../model/services/fetchProfileDataById";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import * as styles from "./ProfileCard.module.scss";

export interface ProfileCardProps {
    profileId: string
}

const ProfileCard = ({profileId}: ProfileCardProps) => {
    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const validateErrors = useSelector(getProfileValidateErrors)

    let content

    useEffect(() => {
        dispatch(fetchProfileDataById(profileId))
    }, [])

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