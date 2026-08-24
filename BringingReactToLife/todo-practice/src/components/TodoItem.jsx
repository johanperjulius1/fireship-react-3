import { useState } from "react"

export default function TodoItem({ todo, onDelete }) {
    const [isEditing, setIsEditing] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <li className={todo.completed ? "completed" : ""}>
            {isEditing ? (
                <input defaultValue={todo.text} onClick={() => setIsEditing(false)} />
            ) : (
                <span
                    onClick={() => setIsEditing(true)}
                    className={isCompleted ? "completed" : ""}
                >
                    {todo.text}
                </span>
            )}
            <button type="button">Edit</button>
            <button type="button" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}