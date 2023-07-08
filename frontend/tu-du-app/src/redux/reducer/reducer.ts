
import { Action } from "./interface-action"

export interface IRegistrationState {
  loading: boolean | null,
  data: IUserData | null,
  error: boolean | null,
  sucess: boolean | null,
}

const INITIAL_STATE= {
  loading: false,
  data: null,
  error: false,
  sucess: false
}

export function RegitrationReducer(state = INITIAL_STATE, action: Action){
  switch(action.type){
    case "POST_USER_REQUEST":
        return{
          ...state,
          loading: action.payload,
          data: null,
          error: false,
          sucess: false
        }
    case "POST_USER_SUCESS":
      return{
        ...state,
        loading: false,
        data: action.payload,
        error: false,
        sucess: true
      }
      case "POST_USER_ERROR":
        return{
          ...state,
          loading: false,
          data: null,
          error: action.payload,
          sucess: false
        }

      default:{
        return state;
      }
  }
}
