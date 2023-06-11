import { NavLink } from "react-router-dom"


const TopMenu = () => {
  return (
    <div className="text-4xl bg-sky-500">
        <ul className="flex list-none justify-around m-0 items-center h-28">
            <li><NavLink className="text-sm md:text-4xl bg-orange-600 p-3 rounded-md text-black" to={"/"}>Start</NavLink></li>
            <li><NavLink className="text-sm md:text-4xl bg-orange-600 p-3 rounded-md text-black" to={"/todo"}>Todo</NavLink></li>
            <li><NavLink className="text-sm md:text-4xl bg-orange-600 p-3 rounded-md text-black" to={"/field"}>Field</NavLink></li>
        </ul>
    </div>
  )
}

export default TopMenu