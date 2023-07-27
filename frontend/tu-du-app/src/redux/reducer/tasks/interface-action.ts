export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS"
export const GET_TASKS_ERROR = "GET_TASKS_ERROR"
export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST"

interface IActionGetTasksSuccess {
  type: "GET_TASKS_SUCCESS",
  payload: ITaskData
}

interface IActionGetTasksError {
  type: "GET_TASKS_ERROR",
  payload: boolean
}

interface IActionGetTasksRequest {
  type: "GET_TASKS_REQUEST",
  payload: boolean
}
export type Action = |
  IActionGetTasksSuccess |
  IActionGetTasksError |
  IActionGetTasksRequest
