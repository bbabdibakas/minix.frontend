import {User, UserData, UserState} from './model/types/UserState';
import {userActions, userReducer} from './model/slice/userSlice';
import {getUserData} from './model/selectors/getUserData';
import {getIsUserInit} from './model/selectors/getIsUserInit';

export type {
    User,
    UserData,
    UserState
}

export {
    getIsUserInit,
    getUserData,
    userActions,
    userReducer
}