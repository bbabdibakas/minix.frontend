import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState, ThunkExtraArg} from "./RootState";
import {userReducer} from "entities/User";
import {profileReducer} from "entities/Profile";
import {editProfileReducer} from "features/EditProfile";
import {registerReducer} from "features/Register";
import {loginReducer} from "features/Login";
import {$api} from "shared/api/api";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        profile: profileReducer,
        editProfile: editProfileReducer,
        register: registerReducer,
        login: loginReducer,
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
