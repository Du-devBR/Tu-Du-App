export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS"
export const GET_TASKS_ERROR = "GET_TASKS_ERROR"
export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST"
export const POST_TASK_DATA = "POST_TASK_DATA"
export const POST_TASK_REQUEST = "POST_TASK_REQUEST"
export const POST_TASK_SUCCESS = "POST_TASK_SUCCESS"
export const PUT_START_TASK_SUCCESS = "PUT_START_TASK_SUCCESS"
export const PUT_START_TASK_REQUEST = "PUT_START_TASK_REQUEST"
export const PUT_FINISHED_TASK_SUCCESS = "PUT_FINISHED_TASK_SUCCESS"
export const PUT_FINISHED_TASK_REQUEST = "PUT_FINISHED_TASK_REQUEST"
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

interface IActionPostTaskData {
  type: "POST_TASK_DATA",
  payload: ITaskData
}

interface IActionPostTaskRequest {
  type: "POST_TASK_REQUEST",
  payload: boolean
}

interface IActionPostTaskSuccess {
  type: "POST_TASK_SUCCESS",
  payload: boolean
}

interface IActionPutStartTaskSuccess {
  type: "PUT_START_TASK_SUCCESS",
  payload: ITaskData
}

interface IActionPutStartTaskRequest {
  type: "PUT_START_TASK_REQUEST",
  payload: ITaskData
}

interface IActionPutFinishedTaskSuccess {
  type: "PUT_FINISHED_TASK_SUCCESS",
  payload: ITaskData
}

interface IActionPutFinishedTaskRequest {
  type: "PUT_FINISHED_TASK_REQUEST",
  payload: ITaskData
}

export type Action = |
  IActionGetTasksSuccess |
  IActionGetTasksError |
  IActionGetTasksRequest |
  IActionPostTaskData |
  IActionPostTaskRequest |
  IActionPostTaskSuccess |
  IActionPutStartTaskSuccess |
  IActionPutStartTaskRequest |
  IActionPutFinishedTaskSuccess |
  IActionPutFinishedTaskRequest
