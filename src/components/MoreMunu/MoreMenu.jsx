import { NavLink } from "react-router-dom"
const MoreMenu = () => {
  return (

    <div className="bg-cyan-500 p-4 rounded-xl">
        <ul className="flex justify-between flex-row gap-x-8">
            <li><NavLink to={"/more/more-one"}>MoreOne</NavLink></li>
            <li><NavLink to={"/more/more-two"}>MoreTwo</NavLink></li>
            <li><NavLink to={"/notReady"}>MoreOne</NavLink></li>
            <li><NavLink to={"/notReady"}>MoreOne</NavLink></li>
            <li><NavLink to={"/notReady"}>MoreOne</NavLink></li>
        </ul>
    </div>
  )
}

export default MoreMenu