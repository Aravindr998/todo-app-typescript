import { useState } from "react"
import "./App.css"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import CompletedTaskList from "./components/CompletedTaskList"

interface TaskType {
  id: number
  task: string
}

function App() {
  const [task, setTask] = useState<TaskType[]>([])
  const [id, setId] = useState(0)
  const [completed, setCompleted] = useState<TaskType[]>([])
  const addNewTask = (text: string) => {
    setTask((prevState) => {
      return [...prevState, { task: text, id }]
    })
    setId((prevState) => ++prevState)
  }
  const getCompleted = (id: number) => {
    const completedTask = task.find((item) => item.id === id)
    setTask((prevState) => prevState.filter((item) => item.id !== id))
    if (completedTask)
      setCompleted((prevState) => {
        return [...prevState, completedTask]
      })
  }
  return (
    <>
      <div>
        <h1 className="heading">Todo List</h1>
      </div>
      <TaskList tasks={task} getCompleted={getCompleted} />
      <TaskInput addNewTask={addNewTask} />
      <CompletedTaskList completed={completed} />
    </>
  )
}

export default App
