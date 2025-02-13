import {UserState} from "entities/User";
import {RegisterState} from "features/Register";
import {LoginState} from "features/Login";
import {ProfileState} from "entities/Profile";

export interface RootState {
    user: UserState
    profile: ProfileState
    register: RegisterState
    login: LoginState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}