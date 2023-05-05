import { useState } from "react"

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = (elem) => {
        setUserInput(elem.currentTarget.value)
    }
    const handleSubmit = (elem) => {
        elem.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (elem) => {
        if(elem.key === "Enter") {
            handleSubmit(elem)
        }
    }

    return (
        <form onSubmit ={handleSubmit}>
            <input
                value = {userInput}
                type = "text"
                onChange = {handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter a new task"
            />
            <button className = "btm">Save</button>
        </form>
    )
}

export default ToDoForm