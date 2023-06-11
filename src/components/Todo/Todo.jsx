import { useDispatch } from "react-redux"
import { useState } from "react"
import {addTodoAction} from "../../store/todoSlice"

const Todo = () => {
const [newTodo, setNewTodo] = useState("")
const dispatch = useDispatch()
function addTodoHandler() {
    if (newTodo.trim() !== "") {
        dispatch(addTodoAction({text:newTodo,isDone:false}))
        setNewTodo("")
    }
}
function handleKeyPress (event){
    if(event.key === 'Enter'){
        addTodoHandler()
    }
  }
  return (
    <div className="w-full">
        <label className="flex flex-col lg:flex-row w-full bg-cyan-500 justify-center p-10 gap-10 items-center">
            <p>new todo</p>
            <input className="w-full" value={newTodo} onChange={(event)=>{setNewTodo(event.target.value)}} type="text"  placeholder="your new todo" onKeyDown={handleKeyPress}/>
            <button className="bg-emerald-700 p-3 rounded-md" onClick={addTodoHandler}>add</button>
        </label>
    </div>
  )
}

export default Todo