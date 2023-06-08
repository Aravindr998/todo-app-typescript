interface Task {
  id: number
  task: string
}

interface CompletedProps {
  completed: Task[]
}

const CompletedTaskList = (props: CompletedProps) => {
  let taskList: JSX.Element[] | undefined
  if (props.completed)
    taskList = props.completed.map((item) => {
      return (
        <div key={item.id} className="completed-list">
          <p>{item.task}</p>
        </div>
      )
    })

  return (
    <div>
      <h5 className="completed-heading">Completed</h5>
      {taskList}
    </div>
  )
}

export default CompletedTaskList
