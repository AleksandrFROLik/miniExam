import {combineReducers, createStore} from "redux";
import {CounterReducer} from "./CounterReducer";
import {DisabledReducer} from "./DisabledReducer";
import {WarningReducer} from "./WarningReducer";

export type rootReducerType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    counter: CounterReducer,
    disabled: DisabledReducer,
    warning: WarningReducer,


})

let preloadstate;
const persistedToString = localStorage.getItem('app-state')
if (persistedToString) {
    preloadstate = JSON.parse(persistedToString)
}

export const store = createStore(rootReducer, preloadstate)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})