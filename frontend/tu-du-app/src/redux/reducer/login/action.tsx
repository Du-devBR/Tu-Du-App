import axios from "axios";
import { urlApi } from "../../../service/api";
import { POST_LOGIN_ERROR, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./interface-action";

const postLoginUser = (payload: ILoginUser) =>{
  return {
    type: POST_LOGIN_SUCCESS,
    payload,
  }
}

const postLoginUserError = (payload: boolean) => {
  return {
    type: POST_LOGIN_ERROR,
    payload
  }
}

const postLoginUserRequest = (payload: boolean) => {
  return {
    type:POST_LOGIN_REQUEST,
    payload
  }
}


export const fetchPostLogin = (loginData: ILoginUser) => {
  return async(dispatch: any) => {
    dispatch(postLoginUserRequest(true))
    try {
      const response = await axios.post(
        `${urlApi}/api/login`, loginData
      )
      dispatch(postLoginUser(response.data))
    } catch (error) {
      dispatch(postLoginUserError(true))
    }
  }
}
