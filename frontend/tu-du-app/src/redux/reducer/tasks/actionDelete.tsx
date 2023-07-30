import axios from "axios"
import { DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS } from "./interface-action"
import { urlApi } from "../../../service/api"

const deleteTaskSuccess = (payload: ITaskData) => {
  return{
    type: DELETE_TASK_SUCCESS,
    payload,
  }
}

const deleteTaskRequest = (payload: boolean) =>  {
  return{
    type: DELETE_TASK_REQUEST,
    payload
  }
}


export const fetchDeleteTask = (idTask: number) => {
  return async(dispatch: any) =>{
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    dispatch(deleteTaskRequest(true))
    try {
      const response = await axios.delete(
        `${urlApi}/api/user/${id}/tasks?id=${idTask}`, {
          headers: {
            Authorization: token,
          }
        }
      )
      dispatch(deleteTaskSuccess(response.data))
    } catch (error) {
      alert("erro ao excluir")
    }
  }
}
