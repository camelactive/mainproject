import { NavLink } from "react-router-dom"

const NotReady = () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-red-700 text-9xl">Страниц пустой еще ни готов , подожди модет чего нить сделают</h1>
        <div className="relative bg-red-600 rounded-xl text-6xl m-10 ">
            <button className="bg-orange-500 rounded-xl w-full h-full animate-pulse p-4 text-white">
                <NavLink to={"/"}>
                    Я понял
                </NavLink>
            </button>  
        </div>
    </div>
  )
}

export default NotReady