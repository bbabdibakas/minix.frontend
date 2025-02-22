export interface Post {
    id?: string
    content?: string[]
    postId?: string
    profileId?: string
    userId?: string
}


export interface PostState {
    postData?: Post
    isLoading: boolean
    serverError?: string[]
}