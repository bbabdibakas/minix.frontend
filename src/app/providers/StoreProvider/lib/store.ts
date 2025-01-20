import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {RootState} from "./RootState";
import {registerReducer} from "features/Register";

export function createReduxStore(initialState?: RootState, asyncReducers?: ReducersMapObject<RootState>) {
    const rootReducers: ReducersMapObject<RootState> = {
        register: registerReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState
    })

    return store;
}

