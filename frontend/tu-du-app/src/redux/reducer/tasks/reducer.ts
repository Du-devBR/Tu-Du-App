import { Action } from "./interface-action";

export interface ITasksState {
  // loading: boolean | null;
  data: [];
  // error: boolean | null;
  // sucess: boolean | null;
}

const INITIAL_STATE = {
  // loading: false,
  data: null,
  // error: false,
  // sucess: false,
};


export function TasksReducer(state=INITIAL_STATE, action: Action){
  switch(action.type){
    case "GET_TASKS_SUCCESS":
      return{
        ...state,
        data: action.payload,
      }
    default: {
      return state;
    }
  }
}
