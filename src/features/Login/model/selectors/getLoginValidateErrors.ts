import {RootState} from "app/providers/StoreProvider";

export const getLoginValidateErrors = (state: RootState) => state.login.validateErrors