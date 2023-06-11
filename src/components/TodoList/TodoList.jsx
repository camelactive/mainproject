import { useDispatch, useSelector } from "react-redux"
import {deleteTodoAction,doneTodoAction} from "../../store/todoSlice"

const TodoList = () => {
const todos = useSelector(state =>state.todoSlice.todos)
console.log(todos)
const dispatch = useDispatch()
function deleteTodohandler({...elemId}) {
    dispatch(deleteTodoAction(elemId))
}
function doneTodohandler({...elemId}) {
    dispatch(doneTodoAction(elemId))
  
}
  return (
    <div>
        {todos.map((todo,id)=>{
            return(<div className={todo.isDone ? "bg-green-400 w-full flex items-center justify-between" : "w-full flex items-center justify-between" } key={id}>
                <p className=" ml-6">{todo.text}</p>
                <div className="mr-6 flex items-center">
                    <button className="text-white bg-green-700 p-4 rounded-xl text-4xl w-48" onClick={()=>doneTodohandler({id})}>
                        {todo.isDone && "undone"}
                        {!todo.isDone && "done"}
                    </button>
                    <button className="text-white bg-red-700 p-4 rounded-xl text-4xl"  onClick={()=>deleteTodohandler({id})}>delete</button>
                </div>
                </div>)
        })}
    </div>
  )
}

export default TodoList