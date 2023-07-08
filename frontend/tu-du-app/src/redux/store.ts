import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import thunk from 'redux-thunk';
import { IRegistrationState, RegitrationReducer } from './reducer/register/reducer';

export type IRootState = {
  register: IRegistrationState;
};

const reducer = combineReducers({
  register: RegitrationReducer,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
