import {AppInput} from 'shared/ui/AppInput/AppInput';
import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {getProfileData} from 'entities/Profile';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {useEffect} from 'react';
import {getEditProfileForm} from '../../model/selectors/getEditProfileForm';
import {getEditProfileIsLoading} from '../../model/selectors/getEditProfileIsLoading';
import {getEditProfileValidateErrors} from '../../model/selectors/getEditProfileValidateErrors';
import {getEditProfileServerErrors} from '../../model/selectors/getEditProfileServerErrors';
import {ValidateProfileError} from '../../model/types/EditProfileState';
import {editProfileActions} from '../../model/slice/editProfileSlice';
import {updateProfileDataById} from '../../model/services/updateProfileDataById';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import * as styles from './EditProfileForm.module.scss';

interface EditProfileFormProps {
    onSuccess: () => void;
}

const EditProfileForm = ({onSuccess}: EditProfileFormProps) => {
    const dispatch = useAppDispatch()

    const profileData = useSelector(getProfileData)

    const profileForm = useSelector(getEditProfileForm)
    const isLoading = useSelector(getEditProfileIsLoading)
    const validateErrors = useSelector(getEditProfileValidateErrors)
    const serverErrors = useSelector(getEditProfileServerErrors)

    const onChangeName = (value: string) => {
        dispatch(editProfileActions.updateProfileForm({name: value}))
    }

    const onChangeUsername = (value: string) => {
        dispatch(editProfileActions.updateProfileForm({username: value}))
    }

    const onChangeBio = (value: string) => {
        dispatch(editProfileActions.updateProfileForm({bio: value}))
    }

    const onUpdateProfile = async () => {
        const response = await dispatch(updateProfileDataById())
        if (response.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }

    useEffect(() => {
        if (profileData) {
            dispatch(editProfileActions.initProfileForm(profileData))
        }
    }, [dispatch, profileData])

    if (isLoading) {
        return (
            <div className={styles.EditProfileForm}>
                <AppPageLoader/>
            </div>
        )
    }

    return (
        <div className={styles.EditProfileForm}>
            <div className={styles.title}>
                Edit profile
            </div>
            {serverErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            {validateErrors?.map((error, index) => (
                <div className={styles.error} key={index}>
                    {error}
                </div>))
            }
            <AppInput
                value={profileForm?.name ?? ''}
                placeholder={'Name'}
                onChange={onChangeName}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateProfileError.INCORRECT_NAME)}
            />
            <AppInput
                value={profileForm?.username ?? ''}
                placeholder={'Username'}
                onChange={onChangeUsername}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateProfileError.INCORRECT_USERNAME)}
            />
            <AppInput
                value={profileForm?.bio ?? ''}
                placeholder={'Bio'}
                onChange={onChangeBio}
                disabled={isLoading}
                hasError={validateErrors?.includes(ValidateProfileError.INCORRECT_BIO)}
            />
            <AppButton
                className={styles.button}
                onClick={()=> void onUpdateProfile()}
            >
                submit
            </AppButton>
        </div>
    )
}

export default EditProfileForm;