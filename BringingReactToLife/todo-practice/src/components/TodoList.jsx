import { useState } from "react"
import "./TodoList.css"


function TodoList() {
    console.log("hello from todolist")
    const [todos, setTodos] = useState([{
        id: Date.now(),
        completed: true,
        text: "make the dishes"
    }, {
        id: Date.now(),
        completed: false,
        text: "make the dishes"
    }])



    return (
        <section>
            <ul>
                {
                    todos.map(todo => {
                        return <li
                            key={todo.id}
                            className={todo.completed ? "completed" : ""}>
                            {todo.text}
                        </li>
                    })
                }
            </ul>

        </section>
    )
}

export default TodoList