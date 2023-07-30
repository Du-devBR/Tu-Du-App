
import { Action} from "./interface-action";

export interface ITasksState {
  loading: boolean | null;
  data: ITaskData[] | null;
  error: boolean | null;
  success: boolean | null;
  taskStatus: {
    ABERTO: ITaskData[] | null,
    INICIADO: ITaskData[] | null,
    CONCLUIDO: ITaskData[] | null
  }
}

const INITIAL_STATE: ITasksState = {
  loading: false,
  error: false,
  data: [],
  success: false,
  taskStatus: {
    ABERTO: [],
    INICIADO: [],
    CONCLUIDO: []
  }
};


export function TasksReducer(state=INITIAL_STATE, action: Action){
  switch(action.type){
    case "GET_TASKS_SUCCESS":
      const tasks: ITaskData[] = Array.isArray(action.payload) ? action.payload : [action.payload];
      const taskStatus = {
        ABERTO: tasks.filter(task => task.statusTask === 'ABERTO'),
        INICIADO: tasks.filter(task => task.statusTask === 'INICIADO'),
        CONCLUIDO: tasks.filter(task => task.statusTask === 'CONCLUIDO'),
      };
      return{
        ...state,
        data: tasks,
        taskStatus,
        error: false,
        loading: false,
      }
    case "GET_TASKS_ERROR":
      return{
        ...state,
        data: null,
        error: action.payload,
        loading: false,
      }
    case "GET_TASKS_REQUEST":
      return{
        ...state,
        data: null,
        error: false,
        loading: action.payload
      }

    case "POST_TASK_DATA":
      return{
        ...state,
        data: action.payload,
        loading: false,
        success: true
      }

    case "POST_TASK_REQUEST":
      return{
        ...state,
        data: null,
        loading: true,
        success: false
      }

    case "PUT_START_TASK_REQUEST":
      return{
        ...state,
        data: null,
        loading: true,
        success: false
      }

     case "PUT_START_TASK_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true
      };

    case "PUT_FINISHED_TASK_REQUEST":
      return{
        ...state,
        data: null,
        loading: true,
        success: false
      }

     case "PUT_FINISHED_TASK_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true
      };

    case "DELETE_TASK_REQUEST":
      return{
        ...state,
        data: null,
        loading: true,
        success: false
      }

     case "DELETE_TASK_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        success: true
      };
    default: {
      return state;
    }
  }
}
