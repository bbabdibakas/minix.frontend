import {UserState} from 'entities/User';
import {RegisterState} from 'features/Register';
import {LoginState} from 'features/Login';
import {ProfileState} from 'entities/Profile';
import {EditProfileState} from 'features/EditProfile';
import {AxiosInstance} from 'axios';

export interface RootState {
    user: UserState
    profile: ProfileState
    editProfile: EditProfileState
    register: RegisterState
    login: LoginState
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: RootState;
}