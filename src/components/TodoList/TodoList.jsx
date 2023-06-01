import { useSelector } from "react-redux"
import style from "./TodoList.module.css"

const TodoList = () => {
const todos = useSelector(state =>state.todoSlice.todos)
console.log(todos)

  return (
    <div className={style.TodoList}>
        {todos.map((todo,id)=>{
            return(<div className={style.TodoList__todo} key={id}>
                <p className={style.TodoList__todo_text}>{todo.text}</p>
                <div className={style.TodoList__todo_buttons}>
                    <button className={style.TodoList__todo_buttonDone}>done</button>
                    <button className={style.TodoList__todo_buttonPriority}>priority</button>
                    <button className={style.TodoList__todo_buttonDelete}>delete</button>
                </div>
                </div>)
        })}
    </div>
  )
}

export default TodoList