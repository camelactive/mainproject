import { Outlet } from "react-router-dom"
import MoreMenu from "../MoreMunu/MoreMenu"

const More = () => {
  return (
    <div>
        <h1>More</h1>
        <MoreMenu/>
        <Outlet/>
    </div>
  )
}

export default More