import { useState } from "react"

export default function TodoItem({ todo, onDelete, onToggle }) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <li className={todo.completed ? "completed" : ""}>
            {isEditing ? (
                <input defaultValue={todo.text} />
            ) : (
                <span>{todo.text}</span>
            )}
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                aria-label={`Mark "${todo.text}" as ${todo.completed ? "not completed" : "completed"}`}
            />
            {isEditing ? (
                <button type="button" onClick={() => setIsEditing(false)}>
                    Save
                </button>
            ) : (
                <>
                    <button type="button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                    <button type="button" onClick={() => onDelete(todo.id)}>
                        Delete
                    </button>
                </>
            )}
        </li>
    )
}
