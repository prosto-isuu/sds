import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {CounterReducer} from "entitties/Counter";
import {userReducer} from 'entitties/User/index'
export function createReduxStore(initialState?:StateSchema) {

    const rootReducers:ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        user: userReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState: initialState,
    })
}

