import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import ThunkMiddleware from "redux-thunk";
import {loadSettings, saveSettings} from "../utilits/store-utilits";


// loading counter setting form localStorage ===================>
const loadedSettings = loadSettings()

const rootReducer = combineReducers( {
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))


// saving counter setting to localStorage =====================>
store.subscribe(() => saveSettings(store.getState()))



// @ts-ignore
window.store = store;

