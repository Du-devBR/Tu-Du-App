import { GET_TASKS_ERROR, GET_TASKS_REQUEST, GET_TASKS_SUCCESS } from "./interface-action"
import { urlApi } from "../../../service/api"
import axios from "axios"

const  getTaskUserSuccess = (payload: ITaskData) => {
  return {
    type: GET_TASKS_SUCCESS,
    payload,
  }
}


const getTaskUserError = (payload: boolean) => {
  return{
    type: GET_TASKS_ERROR,
    payload,
  }
}

const getTaskUserRequest = (payload: boolean) => {
  return{
    type: GET_TASKS_REQUEST,
    payload,
  }
}

export const fetchGetTasks = () => {
  return async(dispatch: any) => {
    dispatch(getTaskUserRequest(true))
    const token = localStorage.getItem("user")
    const id = localStorage.getItem("id")
    try {
      const response = await axios.get(
        `${urlApi}/api/users/${id}/tasks`, {
          headers: {
            Authorization: token,
          }
        }
      )
      dispatch(getTaskUserSuccess(response.data))
    } catch (error) {
      dispatch(getTaskUserError(true))
    }

  }
}
