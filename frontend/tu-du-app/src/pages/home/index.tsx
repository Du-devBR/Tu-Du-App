import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../redux/store"
import { useEffect } from "react"
import { fetchGetTasks } from "../../redux/reducer/tasks/actionGet"

export function Home(){

  const dispatch = useDispatch()
  const {error, loading, taskStatus} = useSelector((store: IRootState) => store.tasks)

  useEffect(() => {
    dispatch<any>(fetchGetTasks())

  }, [dispatch])

  console.log("dados: " + JSON.stringify(taskStatus))
  return(
    <div>
      <div>
        <h2>Status: Aberto</h2>
        {
          taskStatus.ABERTO?.map((task: ITaskData) => (
            <div key={task.title}>
              <p>{task.title}</p>
            </div>
          ))
        }
      </div>

      <div>
        <h2>Status: Iniciado</h2>
        {
          taskStatus.INICIADO?.map((task: ITaskData) => (
            <div key={task.title}>
              <p>{task.title}</p>
            </div>
          ))
        }
      </div>
      <div>
        <h2>Status: Concluido</h2>
        {
          taskStatus.CONCLUIDO?.map((task: ITaskData) => (
            <div key={task.title}>
              <p>{task.title}</p>
            </div>
          ))
        }
      </div>
      {/* {
        data?.map((task: ITaskData) => (
          <p>{task.title}</p>
        ))
      } */}
      {
        loading ? (
          <p>...carregando</p>
        ) : <p></p>
      }
      {
        error ? (
          <p>Erro ao buscar tarefas</p>
        ): <p></p>
      }
    </div>
  )
}
