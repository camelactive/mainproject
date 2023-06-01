import style from "./TodosLable.module.css"
import TodosMenu from "../../components/TodosMenu/TodosMenu"
import { Outlet } from "react-router-dom"
const TodosLable = () => {
  return (
    <div className={style.TodosLable}>
      <TodosMenu/>
        <div className={style.container}>
            <Outlet/>
        </div>
    </div>
  )
}

export default TodosLable