import {RegisterState} from "features/Register";
import {UserState} from "entities/User";

export interface RootState {
    user: UserState
    register: RegisterState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}