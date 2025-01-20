import {RegisterState} from "features/Register";

export interface RootState {
    register: RegisterState
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: RootState;
}