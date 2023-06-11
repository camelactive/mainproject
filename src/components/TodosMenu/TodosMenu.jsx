import { NavLink } from "react-router-dom"

const TodosMenu = () => {
  return (
    <div  className="text-4xl bg-sky-500">
        <ul className="flex list-none justify-around m-0 items-center h-28">
            <li><NavLink className=" bg-orange-600 p-3 rounded-md text-black" to={"/todo/newtodo"}>NewTodo</NavLink></li>
            <li><NavLink className=" bg-orange-600 p-3 rounded-md text-black" to={"/todo/todoList"}>Todo List</NavLink></li>
        </ul>
    </div>
  )
}

export default TodosMenu