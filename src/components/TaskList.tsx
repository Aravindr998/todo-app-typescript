interface TaskListProps {
  tasks: Task[]
  getCompleted: (arg: number) => void
}

interface Task {
  task: string
  id: number
}

const TaskList = ({ tasks, getCompleted }: TaskListProps) => {
  const handleChange = (id: number) => {
    getCompleted(id)
  }
  console.log(tasks)

  let list: JSX.Element | JSX.Element[] = <div>Add a new task</div>
  if (tasks.length) {
    list = tasks.map((task) => {
      return (
        <div key={task.id} className="task-item">
          <label
            htmlFor={task.id.toString()}
            className="input-container"
            onClick={() => {
              handleChange(task.id)
            }}
          >
            <input type="checkbox" id={task.task.toString()} />
            <span className="check-mark" />
          </label>
          <p>{task.task}</p>
        </div>
      )
    })
  }
  return <div>{list}</div>
}

export default TaskList
