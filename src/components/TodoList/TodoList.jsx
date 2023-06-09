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
            return(<div className={todo.isDone ? "doneTodo" : "undoneTodo" } key={id}>
                <p className=" ml-6">{todo.text}</p>
                <div className="mr-6 flex items-center gap-1">
                    <button className=" text-sm md:text-4xl text-white bg-green-700 p-4 rounded-xl text-4xl w-24 md:w-48" onClick={()=>doneTodohandler({id})}>
                        {todo.isDone && "undone"}
                        {!todo.isDone && "done"}
                    </button>
                    <button className="text-sm md:text-4xl text-white bg-red-700 p-4 rounded-xl text-4xl"  onClick={()=>deleteTodohandler({id})}>delete</button>
                </div>
                </div>)
        })}
    </div>
  )
}

export default TodoList