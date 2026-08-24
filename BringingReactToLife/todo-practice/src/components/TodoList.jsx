import { useState } from "react"
import TodoItem from "./TodoItem"
import "./TodoList.css"



function TodoList() {
    const [todos, setTodos] = useState([{
        id: crypto.randomUUID(),
        completed: true,
        text: "make the dishes"
    }, {
        id: crypto.randomUUID(),
        completed: false,
        text: "make the dishes"
    }])

    const [todoInput, setTodoInput] = useState("")

    const handleTodoInput = (e) => {
        const userInput = e.target.value
        setTodoInput(userInput)
    }

    const addTodo = () => {
        const text = todoInput.trim()
        if (!text) {
            return
        }

        const newTodo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
        }

        setTodos((todos) => [...todos, newTodo])
        setTodoInput("")
    }

    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id))
    }

    return (
        <section>
            <div>
                <label htmlFor="todoInput"></label>
                <input
                    type="text"
                    name="todoInput"
                    onChange={handleTodoInput}
                    value={todoInput}
                />
                <button onClick={addTodo}>Add todo</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
                ))}
            </ul>

        </section>
    )
}

export default TodoList
