import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "../../redux/store"
import { useEffect } from "react"
import { fetchGetTasks } from "../../redux/reducer/tasks/action"

export function Home(){

  const dispatch = useDispatch()
  const {data} = useSelector((store: IRootState) => store.tasks)

  useEffect(() => {
    dispatch<any>(fetchGetTasks())

  }, [dispatch])

  console.log("dados: " + JSON.stringify(data))
  return(
    <div>
      {
        data?.map((task: ITaskData) => (
          <p>{task.title}</p>
        ))
      }
    </div>
  )
}
