import { useState, useRef } from "react"
interface TaskInputProps {
  addNewTask: (text: string) => void
}

const TaskInput = ({ addNewTask }: TaskInputProps) => {
  const [focusText, setFocusText] = useState("Add Task")
  const inputRef = useRef<HTMLInputElement>(null)
  const handleFocus = () => {
    setFocusText("Try typing 'Pay utility bills by friday 5pm'")
  }
  const handleBlur = () => {
    setFocusText("Add Task")
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current) {
        addNewTask(inputRef.current?.value)
        inputRef.current.value = ""
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        className="todo-input"
        placeholder={focusText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </div>
  )
}

export default TaskInput
