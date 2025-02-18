import {useAppDispatch} from "shared/lib/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProfileDataById, getProfileData, getProfileIsLoading, getProfileServerError} from "entities/Profile";
import {ProfileCard} from "widgets/ProfileCard";
import {AppButton} from "shared/ui/AppButton/AppButton";
import {EditProfileModal} from "features/EditProfile";

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    //TODO: Add params for routes
    const profileId = '1'

    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const serverError = useSelector(getProfileServerError)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        dispatch(fetchProfileDataById(profileId))
    }, [dispatch, profileId])

    return (
        <div className='page'>
            <ProfileCard
                profileData={profileData}
                isLoading={isLoading}
                serverError={serverError}
            />
            <AppButton onClick={onModalOpen}>
                Edit profile
            </AppButton>
            {isModalOpen && <EditProfileModal isOpen={isModalOpen} onClose={onModalClose}/>}
        </div>
    )
}

export default ProfilePage