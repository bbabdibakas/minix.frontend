import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {userReducer} from "entities/User";
import {registerReducer} from "features/Register";
import {loginReducer} from "features/Login";
import {profileReducer} from "entities/Profile";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        profile: profileReducer,
        register: registerReducer,
        login: loginReducer,
    }

     return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
