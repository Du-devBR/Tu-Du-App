import axios from "axios"
import { POST_TASK_REQUEST, POST_TASK_DATA} from "./interface-action"
import { urlApi } from "../../../service/api"

const postTaskUserData = (payload: ITaskData) => {
  return{
    type: POST_TASK_DATA,
    payload,
  }
}

const postTaskUserRequest = (payload: boolean) => {
  return{
    type: POST_TASK_REQUEST,
    payload,
  }
}

export const fetchPostTask = (taskData: ITaskData) => {
  return async(dispatch: any) =>{
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    try {
      dispatch(postTaskUserRequest(true))
      const response = await axios.post(
        `${urlApi}/api/users/${id}/tasks`, taskData, {
          headers: {
            Authorization: token,
          }
        }
      )
      dispatch(postTaskUserData(response.data))
    } catch (error) {
      alert("erro ao cadastrar")
    }
  }
}
