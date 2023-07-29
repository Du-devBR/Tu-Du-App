import axios from "axios"
import { urlApi } from "../../../service/api"
import { PUT_START_TASK_REQUEST, PUT_START_TASK_SUCCESS } from "./interface-action"

const putStatusTaskSuccess = (payload: ITaskData) => {
  return{
    type: PUT_START_TASK_SUCCESS,
    payload
  }
}

const putStatusTaskRequest = (payload: boolean) => {
  return{
    type: PUT_START_TASK_REQUEST,
    payload
  }
}

export const fetchStartTask = (idTask : number) => {
  return async(dispatch: any) =>{
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    dispatch(putStatusTaskRequest(true))
    try {
      const response = await axios.put(
        `${urlApi}/api/user/${id}/tasks/${idTask}`, {statusTask: "INICIADO"}, {
          headers: {
            Authorization: token,
          }
        }
      )
      dispatch(putStatusTaskSuccess(response.data))
    } catch (error) {
      alert("erro ao cadastrar")
    }
  }
}


export const fetchFinishedTask = (idTask : number) => {
  return async(dispatch: any) =>{
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    dispatch(putStatusTaskRequest(true))
    try {
      const response = await axios.put(
        `${urlApi}/api/user/${id}/tasks/${idTask}`, {statusTask: "CONCLUIDO"}, {
          headers: {
            Authorization: token,
          }
        }
      )
      dispatch(putStatusTaskSuccess(response.data))
    } catch (error) {
      alert("erro ao cadastrar")
    }
  }
}
