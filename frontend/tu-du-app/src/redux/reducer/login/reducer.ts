import { Action } from "./interface-action";

export interface ILoginState {
  loading: boolean | null;
  data: IUserData | null;
  error: boolean | null;
  sucess: boolean | null;
}


const INITIAL_STATE = {
  loading: false,
  data: null,
  error: false,
  sucess: false,
};


export function LoginReducer(state=INITIAL_STATE, action: Action){
  switch(action.type){
    case "POST_LOGIN_REQUEST":
      return{
        ...state,
        loading: action.payload,
        data: null,
        error: false,
        sucess: false,
      }

    case "POST_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
        sucess: true,
      }

    case "POST_LOGIN_ERROR":
      return{
        ...state,
        loading: false,
        data: null,
        error: action.payload,
        sucess: false,
      }

    default: {
      return state;
    }
  }
}
