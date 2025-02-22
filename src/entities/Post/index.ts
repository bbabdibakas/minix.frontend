import {Post, PostState} from './model/types/PostState';
import {getPostData} from './model/selectors/getPostData';
import {getPostIsLoading} from './model/selectors/getPostIsLoading';
import {getPostServerError} from './model/selectors/getPostServerError';
import {postActions, postReducer} from './model/slice/postSlice';
import {fetchPostDataById} from './model/services/fetchPostDataById';

export type {
    Post,
    PostState
}

export {
    postActions,
    postReducer,
    getPostData,
    getPostIsLoading,
    getPostServerError,
    fetchPostDataById
}