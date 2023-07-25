export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_REQUEST = "POST_LOGIN_REQUEST"


interface IActionPostLoginError {
  type: "POST_LOGIN_ERROR",
  payload: boolean,
}

interface IActionPostLoginSuccess {
  type: "POST_LOGIN_SUCCESS",
  payload: ILoginUser,
}

interface IActionPostLoginRequest {
  type: "POST_LOGIN_REQUEST",
  payload: boolean,
}


export type Action = |
IActionPostLoginError |
IActionPostLoginSuccess |
IActionPostLoginRequest
