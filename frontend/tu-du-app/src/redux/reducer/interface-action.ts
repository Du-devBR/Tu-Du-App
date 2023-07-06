export const POST_USER_ERROR = "POST_USER_ERROR";
export const POST_USER = "POST_USER";

interface IActionPostUserError {
  type: "POST_USER_ERROR",
  payload: string
}

interface IActionPostUser {
  type: "POST_USER",
  payload: IUserData
}


export type Action = | IActionPostUserError | IActionPostUser
