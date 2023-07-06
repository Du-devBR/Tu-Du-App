import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { IRegistrationState, RegitrationReducer } from "./reducer/reducer"
import thunk from "redux-thunk";

export type IRootState = {
  register: IRegistrationState ;
}

const reducer = combineReducers({
  register: RegitrationReducer,
})

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk))
