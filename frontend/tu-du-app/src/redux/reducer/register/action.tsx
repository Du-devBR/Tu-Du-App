import axios from "axios"
import {toast} from 'react-toastify'
import { POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCESS,  } from "./interface-action"
import { urlApi } from "../../../service/api"

const postNewUser = (payload: IUserData) => {
  return {
    type: POST_USER_SUCESS,
    payload,
  }
}

const postNewUserError = (payload: boolean) => {
  return {
    type: POST_USER_ERROR,
    payload
  }
}

const postNewUserRequest = (payload: boolean) => {
  return {
    type:POST_USER_REQUEST,
    payload
  }
}

export const fetchPostUser = (userData: IUserData) => {
  return async(dispatch: any) => {
    dispatch(postNewUserRequest(true))
    try {
      const response = await axios.post(
        `${urlApi}/api/user`, userData
      )
      dispatch(postNewUser(response.data))
      toast.success("Usuario cadastrado")
    } catch (error) {
      dispatch(postNewUserError(true))
      toast.error("Erro ao cadastrar usuario!")
    }
  }
}
