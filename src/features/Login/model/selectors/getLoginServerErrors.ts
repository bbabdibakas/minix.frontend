import {RootState} from "app/providers/StoreProvider";

export const getLoginServerErrors = (state: RootState) => state.login.serverErrors