import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../redux/store"
import { FormEvent, useEffect, useState } from "react"
import { fetchGetTasks } from "../../redux/reducer/tasks/actionGet"
import { fetchPostTask } from "../../redux/reducer/tasks/actionPost"
import { fetchFinishedTask, fetchStartTask } from "../../redux/reducer/tasks/actionPut"

export function Home(){

  const dispatch = useDispatch()
  const {error, loading, taskStatus, success} = useSelector((store: IRootState) => store.tasks)

  const [task, setTask] = useState<ITaskData>({
    title: "",
    description: "",
    statusTask: "ABERTO",
    category: "ESTUDOS"
  })

  useEffect(() => {
        dispatch<any>(fetchGetTasks())
  }, [dispatch, success])

  function salvarTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    dispatch<any>(fetchPostTask(task))
  }


  return(
    <div>
      <form action="" onSubmit={salvarTask}>
        <input type="text" onChange={(event) => setTask({...task, title: event.target.value})}/>
        <input type="text" onChange={(event) => setTask({...task, description: event.target.value})}/>
        <button type="submit">Salvar</button>
      </form>
      <div className="flex gap-1">
        <h2>Status: Aberto</h2>
        {
          taskStatus.ABERTO?.map((task: ITaskData) => (
            <div key={task.id}>
              <p>id: {task.id} - {task.title}</p>
              <button onClick={() => task.id && dispatch<any>(fetchStartTask(task.id))}>iniciar</button>
              <button onClick={() => task.id && dispatch<any>(fetchFinishedTask(task.id))}>Concluir</button>
            </div>
          ))
        }
      </div>

      <div>
        <h2>Status: Iniciado</h2>
        {
          taskStatus.INICIADO?.map((task: ITaskData) => (
            <div key={task.id}>
              <p>id: {task.id} - {task.title}</p>
              <button onClick={() => task.id && dispatch<any>(fetchStartTask(task.id))}>iniciar</button>
              <button onClick={() => task.id && dispatch<any>(fetchFinishedTask(task.id))}>Concluir</button>
            </div>
          ))
        }
      </div>
      <div>
        <h2>Status: Concluido</h2>
        {
          taskStatus.CONCLUIDO?.map((task: ITaskData) => (
            <div key={task.id}>
              <p>id: {task.id} - {task.title}</p>
            </div>
          ))
        }
      </div>
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
