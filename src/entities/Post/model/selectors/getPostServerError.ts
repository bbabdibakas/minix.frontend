import {RootState} from 'app/providers/StoreProvider';

export const getPostServerError = (state: RootState) => state.post.serverError