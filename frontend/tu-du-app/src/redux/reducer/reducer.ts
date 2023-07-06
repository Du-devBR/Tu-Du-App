
import { Action } from "./interface-action"

export interface IRegistrationState {
  loading: boolean,
  data: IUserData | null,
  error: string | null,
}

const INITIAL_STATE= {
  loading: false,
  data: null,
  error: null,
}

export function RegitrationReducer(state = INITIAL_STATE, action: Action){
  switch(action.type){
    case "POST_USER":
      return{
        ...state,
        loading: true,
        data: action.payload,
        error: false
      }
      case "POST_USER_ERROR":
        return{
          ...state,
          loading: false,
          data: null,
          error: action.payload
        }
      default:{
        return state;
      }
  }
}
