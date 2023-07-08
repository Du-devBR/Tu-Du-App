import axios from "axios"
import { POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCESS } from "../interface-action"
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
    } catch (error) {
      dispatch(postNewUserError(true))
    }
  }
}
