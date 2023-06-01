import { useDispatch, useSelector } from "react-redux"
import {deleteTodoAction,doneTodoAction} from "../../store/todoSlice"
import style from "./TodoList.module.css"

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
    <div className={style.TodoList}>
        {todos.map((todo,id)=>{
            return(<div className={todo.isDone ? style.TodoList__todoDone : style.TodoList__todo } key={id}>
                <p className={style.TodoList__todo_text}>{todo.text}</p>
                <div className={style.TodoList__todo_buttons}>
                    <button className={style.TodoList__todo_buttonDone} onClick={()=>doneTodohandler({id})}>
                        {todo.isDone && "undone"}
                        {!todo.isDone && "done"}
                    </button>
                    <button className={style.TodoList__todo_buttonDelete} onClick={()=>deleteTodohandler({id})}>delete</button>
                </div>
                </div>)
        })}
    </div>
  )
}

export default TodoList