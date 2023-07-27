export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS"

interface IActionGetTasksSuccess {
  type: "GET_TASKS_SUCCESS",
  payload: ITaskData
}

export type Action = | IActionGetTasksSuccess
