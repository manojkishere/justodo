import { useState } from "react";
import { motion } from "framer-motion";

export default function TodoInput({ setTodos, todos }) {
    const [input, setInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (input.trim() === "") return
        const rn = Date.now()
        localStorage.setItem("todos", JSON.stringify([...todos, { "title": input, "createdAt": rn, "lastUpdatedAt": rn, "completed": false }]))
        setTodos(JSON.parse(localStorage.getItem("todos")))
        setInput("")
    }

    return (
        <motion.form layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} id="input-form" className="flex px-2 py-2 bg-gray-800 rounded-full border-x-2 border-y-2 transition-all border-gray-600 hover:border-gray-300 focus-within:border-gray-300" onSubmit={handleSubmit}>
            <input className="ml-3 mr-3 bg-transparent font-semibold text-lg outline-none text-white" onInput={(e) => setInput(e.target.value)} type="text" value={input} placeholder="what do you wanna do?" />
            <button className="px-4 py-1 mr-1 font-semibold bg-teal-500 rounded-full transition-all hover:bg-teal-600" >add</button>
        </motion.form>
    )
}