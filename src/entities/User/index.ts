import {User, UserState} from "./model/types/UserState";
import {userActions, userReducer} from "./model/slice/userSlice";
import {getUserData} from "./model/selectors/getUserData";

export type {
    User,
    UserState
}

export {
    getUserData,
    userActions,
    userReducer
}