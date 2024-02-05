import { useRef } from "react"
import { motion } from "framer-motion"

export default function Todo({ todo, todos, setTodos }) {

    const formRef = useRef(null)
    const pRef = useRef(null)

    function handleDeletion() {
        let arr = [...todos]
        arr.splice(arr.indexOf(todo), 1)
        localStorage.setItem("todos", JSON.stringify(arr))
        setTodos(arr)
    }

    function handleCompletionAndIncompletion() {
        let arr = [...todos]
        if (todo.completed) arr[arr.indexOf(todo)].completed = false
        else arr[arr.indexOf(todo)].completed = true
        localStorage.setItem("todos", JSON.stringify(arr))
        setTodos(arr)
    }

    function handleEditing() {
        const formEl = formRef.current
        const pEl = pRef.current
        const inputEl = formEl[0]
        inputEl.value = todo.title
        pEl.style.display = "none"
        formEl.style.display = "block"
        inputEl.focus()
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formEl = formRef.current
        const pEl = pRef.current
        const inputEl = formEl[0]
        let arr = [...todos]
        if (inputEl.value.trim() === "") return
        arr[arr.indexOf(todo)].title = inputEl.value
        localStorage.setItem("todos", JSON.stringify(arr))
        pEl.style.display = "block"
        formEl.style.display = "none"
        setTodos(arr)
    }

    return (
        <motion.li layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} id="todo" className="flex rounded-full py-2 pl-4 pr-3 mb-3">
            <p ref={pRef} className="pt-1 text-gray-300 font-medium" onClick={handleCompletionAndIncompletion}>{todo.completed ? (<s>{todo.title}</s>) : todo.title}</p>
            <form style={{display: 'none'}} className="pt-1" ref={formRef} onSubmit={handleSubmit}><input className="bg-transparent font-medium text-slate-300 outline-none" type="text" /></form>
            <button className="bg-slate-300 text-gray-800 font-medium rounded-full px-3 py-1 mr-2 transition-all duration-200 hover:bg-slate-400" onClick={handleEditing}>edit</button>
            <button className="bg-red-700 text-gray-800 font-medium rounded-full px-3 py-1 transition-all duration-200 hover:bg-red-800"  onClick={handleDeletion}>delete</button>
        </motion.li>
    )
}