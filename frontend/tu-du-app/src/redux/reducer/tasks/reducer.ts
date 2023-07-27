import { Action } from "./interface-action";

export interface ITasksState {
  loading: boolean | null;
  data: [] | null;
  error: boolean | null;
}

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false,
};


export function TasksReducer(state=INITIAL_STATE, action: Action){
  switch(action.type){
    case "GET_TASKS_SUCCESS":
      return{
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      }
    case "GET_TASKS_ERROR":
      return{
        ...state,
        data: null,
        error: action.payload,
        loading: false,
      }
    case "GET_TASKS_REQUEST":
      return{
        ...state,
        data: null,
        error: false,
        loading: action.payload
      }
    default: {
      return state;
    }
  }
}
