import { GET_TASKS_SUCCESS } from "./interface-action"
import { urlApi } from "../../../service/api"
import axios from "axios"
const  getTaskUser = (payload: ITaskData) => {
  return {
    type: GET_TASKS_SUCCESS,
    payload,
  }
}


export const fetchGetTasks = () => {
  return async(dispatch: any) => {
    const token = localStorage.getItem("user")
    const id = localStorage.getItem("id")
    const response = await axios.get(
      `${urlApi}/api/users/${id}/tasks`, {
        headers: {
          Authorization: token,
        }
      }

    )
    dispatch(getTaskUser(response.data))
  }
}
