import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./NotFound.module.css"

const NotFound = ({props}) => {
const timeToMain = props.timeToMain
const [count, setCount] = useState(timeToMain)
const navigate = useNavigate()
function navigateToMainPAge(timeout) {
    setInterval(() => {
        setCount(count - 1)
    }, 1000);
    setTimeout(()=>{
        navigate("/")
    },timeout*1000)
}
useEffect(()=>{
    navigateToMainPAge(count)
})



  return (
    <div className="NotFound">
        <h3>Страница не найдена</h3>
        <p>Вы будете перенаправлены на главную страницу через <span className={style.timeout}>{count}</span> секунд</p>
       
    </div>
  )
}

export default NotFound