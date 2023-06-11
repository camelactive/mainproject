import TodosMenu from "../../components/TodosMenu/TodosMenu"
import { Outlet } from "react-router-dom"
const TodosLable = () => {
  return (
    <div className="text-orange-500 w-full h-full bg-cyan-500">
      <TodosMenu/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default TodosLable