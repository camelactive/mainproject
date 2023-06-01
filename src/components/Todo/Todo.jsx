import { useDispatch } from "react-redux"
import style from "./Todo.module.css"
import { useState } from "react"
import {addTodo} from "../../store/todoSlice"

const Todo = () => {
const [newTodo, setNewTodo] = useState("")
const dispatch = useDispatch()
function addTodoHandler() {
    if (newTodo.trim() !== "") {
        dispatch(addTodo({text:newTodo,isDone:false}))
        setNewTodo("")
    }
}
function handleKeyPress (event){
    if(event.key === 'Enter'){
        addTodoHandler()
    }
  }
  return (
    <div className={style.Todo}>
        <label htmlFor="" className={style.Todo__label}>
            <p>new todo</p>
            <input value={newTodo} onChange={(event)=>{setNewTodo(event.target.value)}} type="text" className={style.Todo__label_input} placeholder="your new todo" onKeyDown={handleKeyPress}/>
            <button className={style.Todo__label_button} onClick={addTodoHandler}>add</button>
        </label>
    </div>
  )
}

export default Todo