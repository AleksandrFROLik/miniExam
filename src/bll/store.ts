import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import {DisabledReducer} from "./DisabledReducer";
import {WarningReducer} from "./WarningReducer";

let rootReducer = combineReducers( {
    counter: CounterReducer,
    disabled: DisabledReducer,
    warning: WarningReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)