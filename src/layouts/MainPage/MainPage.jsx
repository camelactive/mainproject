import { Outlet } from "react-router-dom"
import TopMenu from "../../components/TopMenu/TopMenu"

const MainPage = () => {
  return (
    <div className="min-h-screen h-full bg-slate-500 text-cyan-600">
        <TopMenu/>
        <div className="flex justify-center w-4/5 bg-white mx-auto mt-3 border-l-4 border-r-4 border-orange-700">
            <Outlet/>
        </div>
    </div>
  )
}

export default MainPage