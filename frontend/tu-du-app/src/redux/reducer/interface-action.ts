export const POST_USER_ERROR = "POST_USER_ERROR";
export const POST_USER_SUCESS = "POST_USER_SUCESS";
export const POST_USER_REQUEST = "POST_USER_REQUEST";

interface IActionPostUserError {
  type: "POST_USER_ERROR",
  payload: boolean
}

interface IActionPostUserSucess {
  type: "POST_USER_SUCESS",
  payload: IUserData
}

interface IActionPostUserRequest {
  type: "POST_USER_REQUEST",
  payload: boolean
}


export type Action = | IActionPostUserError | IActionPostUserSucess | IActionPostUserRequest
