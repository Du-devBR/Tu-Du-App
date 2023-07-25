import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import thunk from 'redux-thunk';
import { IRegistrationState, RegitrationReducer } from './reducer/register/reducer';
import { ILoginState, LoginReducer } from './reducer/login/reducer';

export type IRootState = {
  register: IRegistrationState;
  login: ILoginState;
};

const reducer = combineReducers({
  register: RegitrationReducer,
  login: LoginReducer,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
