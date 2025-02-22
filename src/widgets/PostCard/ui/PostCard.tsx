import {Post} from 'entities/Post';
import {AppPageLoader} from 'shared/ui/AppPageLoader/AppPageLoader';
import * as styles from './PostCard.module.scss'

export interface PostCardProps {
    postData?: Post,
    isLoading: boolean,
    serverError?: string[]
}

const PostCard = (props: PostCardProps) => {
    const {
        postData,
        isLoading,
        serverError
    } = props

    let content

    if (isLoading) {
        content = (
            <div className={styles.PostCard}>
                <AppPageLoader/>
            </div>
        )
    } else if (serverError) {
        content = (
            <div className={styles.PostCard}>
                {serverError[0]}
            </div>
        )
    } else {
        content = (
            <div className={styles.PostCard}>
                {postData?.content}
            </div>
        )
    }

    return content
}

export default PostCard;