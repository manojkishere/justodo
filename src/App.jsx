import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import Filter from "./components/Filter"
import { AnimatePresence } from "framer-motion"

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(1)

  useEffect(() => {
    if (!localStorage.getItem("todos")) setTodos([])
    else setTodos(JSON.parse(localStorage.getItem("todos")))
  }, [setTodos])

  return (
      <div>
        <AnimatePresence>
          <TodoInput todos={todos} setTodos={setTodos}/>
          <Filter setFilter={setFilter} />
          <TodoList filter={filter} todos={todos} setTodos={setTodos}/>
        </AnimatePresence>
      </div>
  )
}

export default App
