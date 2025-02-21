import {RootState} from 'app/providers/StoreProvider';

export const getProfileServerError = (state: RootState) => state.profile.serverError