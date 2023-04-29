import { useEffect, useState } from "react"


export function App() {

  const [task, setTask] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
    .then(res => res.json())
    .then(data => {
      setTask(data)
    })
  }, [])

  return (
    task.map(task => (
      <>
        <h1>{task.title}</h1>
        <p>Site em construção</p>
      </>
    ))

  )
}
