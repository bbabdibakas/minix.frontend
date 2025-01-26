import {UserState} from "entities/User";
import {RegisterState} from "features/Register";
import {LoginState} from "features/Login";

export interface RootState {
    user: UserState
    register: RegisterState
    login: LoginState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}