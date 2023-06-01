import { NavLink } from "react-router-dom"
import style from "./TopMenu.module.css"

const TopMenu = () => {
  return (
    <div className={style.TopMenu}>
        <ul className={style.TopMenu__list}>
            <li className={style.TopMenu__list_item}><NavLink to={"/"}>Start</NavLink></li>
            <li className={style.TopMenu__list_item}><NavLink to={"/todo"}>Todo</NavLink></li>
            <li className={style.TopMenu__list_item}><NavLink to={"/field"}>Field</NavLink></li>
        </ul>
    </div>
  )
}

export default TopMenu