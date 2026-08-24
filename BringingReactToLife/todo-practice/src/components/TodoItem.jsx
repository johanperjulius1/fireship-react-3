import { useState } from "react"

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false)
  
    return (
      <li className={todo.completed ? "completed" : ""}>
        {isEditing ? (
          <input defaultValue={todo.text} onClick={() => setIsEditing(false)} />
        ) : (
          <span onClick={() => setIsEditing(true)}>{todo.text}</span>
        )}
      </li>
    )
  }