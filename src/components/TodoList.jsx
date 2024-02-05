import { AnimatePresence } from "framer-motion"
import Todo from "./Todo"

export default function TodoList({ filter, todos, setTodos }) {
    function listToRender() {
        if (filter === 0) {
            return todos.map(todo => <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.createdAt} />)
        } else if (filter === 1) {
            return todos.filter(todo => !todo.completed).map(todo => <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.createdAt}/>)
        } else {
            return todos.filter(todo => todo.completed).map(todo => <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.createdAt}/>)
        }
    }
    return (
        <ul id="todo-list" className="flex flex-col justify-center mt-5"><AnimatePresence>{ listToRender() }</AnimatePresence></ul>
    )

}