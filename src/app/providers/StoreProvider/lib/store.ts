import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {registerReducer} from "features/Register";
import {userReducer} from "entities/User";

export function createReduxStore(initialState?: RootState, asyncReducers?: ReducersMapObject<RootState>) {
    const rootReducers: ReducersMapObject<RootState> = {
        user: userReducer,
        register: registerReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
