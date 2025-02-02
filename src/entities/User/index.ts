import {User, UserData, UserState} from "./model/types/UserState";
import {userActions, userReducer} from "./model/slice/userSlice";
import {getUserData} from "./model/selectors/getUserData";

export type {
    User,
    UserData,
    UserState
}

export {
    getUserData,
    userActions,
    userReducer
}