import axios from "axios"
import { POST_USER, POST_USER_ERROR } from "../interface-action"
import { urlApi } from "../../../service/api"

const postNewUser = (payload: IUserData) => {
  return {
    type: POST_USER,
    payload,
  }
}

const postNewUserError = (payload: Error) => {
  return {
    type: POST_USER_ERROR,
    payload
  }
}

export const fetchPostUser = (userData: IUserData) => {
  return async(dispatch: any) => {
    try {
      const response = await axios.post(
        `${urlApi}/api/user`, userData
      )
      dispatch(postNewUser(response.data))
    } catch (error) {
      dispatch(postNewUserError(error.message))
    }
  }
}
