import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./NotFound.module.css"

const NotFound = ({props}) => {
const timeToMain = props.timeToMain
const [count, setCount] = useState(timeToMain)
const navigate = useNavigate()
function navigateToMainPAge(timeout) {
    setInterval(() => {
        setCount(timeout - 1)
    }, 1000);
    if (timeout === 0) {
        navigate("/")
    }
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