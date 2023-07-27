import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';

import thunk from 'redux-thunk';
import { IRegistrationState, RegitrationReducer } from './reducer/register/reducer';
import { ILoginState, LoginReducer } from './reducer/login/reducer';
import { ITasksState, TasksReducer } from './reducer/tasks/reducer';

export type IRootState = {
  register: IRegistrationState;
  login: ILoginState;
  tasks: ITasksState;
};

const reducer = combineReducers({
  register: RegitrationReducer,
  login: LoginReducer,
  tasks: TasksReducer,
});

export const appStore = legacy_createStore(reducer, applyMiddleware(thunk));
