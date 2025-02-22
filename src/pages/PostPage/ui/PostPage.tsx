import {useAppDispatch} from 'shared/lib/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {useEffect,} from 'react';
import {fetchPostDataById, getPostData, getPostIsLoading, getPostServerError} from 'entities/Post';
import {fetchProfileDataById, getProfileData, getProfileIsLoading, getProfileServerError} from 'entities/Profile';
import {PostProfile} from 'widgets/Profile';
import {PostCard} from 'widgets/PostCard';
import * as styles from './PostPage.module.scss'

const PostPage = () => {
    const dispatch = useAppDispatch();

    //TODO: Add params for routes
    const postId = '1'

    const postData = useSelector(getPostData)
    const isLoading = useSelector(getPostIsLoading)
    const serverError = useSelector(getPostServerError)

    const profileData = useSelector(getProfileData)
    const isProfileLoading = useSelector(getProfileIsLoading)
    const profileServerError = useSelector(getProfileServerError)

    useEffect(() => {
        void dispatch(fetchPostDataById(postId))
    }, [dispatch, postId])

    useEffect(() => {
        if (postData?.profileId) {
            void dispatch(fetchProfileDataById(postData.profileId))
        }
    }, [dispatch, postData?.profileId]);

    return (
        <div className='page'>
            <div className={styles.PostPage}>
                {profileData && (
                    <PostProfile
                        profileData={profileData}
                        isLoading={isProfileLoading}
                        serverError={profileServerError}
                    />
                )}
                <PostCard
                    postData={postData}
                    isLoading={isLoading}
                    serverError={serverError}
                />
            </div>
        </div>
    )
}

export default PostPage