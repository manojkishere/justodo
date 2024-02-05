import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function Filter({ setFilter }) {

    const divRef = useRef(null)

    function handleFilter(e, filterCode) {
        const divEl = divRef.current
        const iteratableDiv = Array.prototype.slice.call(divEl.childNodes)
        iteratableDiv.forEach((btn) => {
            btn.removeAttribute("id")
        })
        e.target.id = "active-filter"
        setFilter(filterCode)
    }

    return (
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} ref={divRef} className="mt-4 flex justify-center">
            <button className="border-x-2 border-y-2 text-gray-300 px-4 py-1 rounded-full mr-3 font-semibold transition-all duration-200 border-gray-300 hover:text-gray-800 hover:bg-gray-300" onClick={(e) => handleFilter(e, 0)}>all</button>
            <button className="border-x-2 border-y-2 text-gray-300 px-4 py-1 rounded-full mr-3 font-semibold transition-all duration-200 border-gray-300 hover:text-gray-800 hover:bg-gray-300" onClick={(e) => handleFilter(e, 1)}>pending</button>
            <button className="border-x-2 border-y-2 text-gray-300 px-4 py-1 rounded-full font-semibold transition-all duration-200 border-gray-300 hover:text-gray-800 hover:bg-gray-300" onClick={(e) => handleFilter(e, 2)}>completed</button>
        </motion.div>
    )
}