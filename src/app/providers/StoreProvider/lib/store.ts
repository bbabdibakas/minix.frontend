import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {userReducer} from "entities/User";
import {registerReducer} from "features/Register";
import {loginReducer} from "features/Login";

export function createReduxStore(initialState?: RootState) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        register: registerReducer,
        login: loginReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
