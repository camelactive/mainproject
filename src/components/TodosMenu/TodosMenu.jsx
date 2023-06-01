import { NavLink } from "react-router-dom"
import style from "./TodosMenu.module.css"
const TodosMenu = () => {
  return (
    <div className={style.TodosMenu}>
        <ul className={style.TodosMenu__list}>
            <li className={style.TodosMenu__list_item}><NavLink to={"/todo/newtodo"}>NewTodo</NavLink></li>
            <li className={style.TodosMenu__list_item}><NavLink to={"/todo/todoList"}>Todo List</NavLink></li>
        </ul>
    </div>
  )
}

export default TodosMenu