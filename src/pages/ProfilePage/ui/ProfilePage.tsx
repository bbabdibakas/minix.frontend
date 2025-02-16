import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProfileDataById, getProfileData, getProfileIsLoading, getProfileValidateErrors} from "entities/Profile";
import {ProfileCard} from "widgets/ProfileCard";

const ProfilePage = () => {
    const dispatch = useAppDispatch();

    //TODO: Add params for routes
    const profileId = '1'

    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const validateErrors = useSelector(getProfileValidateErrors)

    useEffect(() => {
        dispatch(fetchProfileDataById(profileId))
    }, [dispatch, profileId])

    return (
        <div className='page'>
            <ProfileCard
                profileData={profileData}
                isLoading={isLoading}
                validateErrors={validateErrors}
            />
        </div>
    )
}

export default ProfilePage