import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"
import style from "./MainPage.module.css"

const MainPage = () => {
  return (
    <div className={style.MainPage}>
        <TopMenu/>
        <div className={style.container}>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainPage