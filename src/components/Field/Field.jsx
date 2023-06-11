import style from "./Field.module.css"
import { useSelector } from "react-redux"

const Field = () => {
const {rows,columns} = useSelector(state => state.fieldSlice.numbersOfFields)
const testArr = []
for (let idx = 0; idx < rows; idx++) {
    testArr.push([])
}
testArr.map((row,id) => {
    if (id %2 !== 0) {
        for (let column = 0; column < columns; column++) {
                  if (column%2 !==0) {row.push({text:" ", style: "black"}) }
                    else if (column%2 ===0){row.push({text:" ",style: "white"})}
            }
    }
    else if (id %2 === 0){
            for (let column = 0; column < columns; column++) {
                      if (column%2 !==0) {row.push({text:" ",style: "white"}) }
                        else if (column%2 ===0){row.push({text:" ", style: "black"})}
                }
    }
    return true
})
console.log(testArr)
  return (
    <div className={style.Field}>
        {testArr.map((element,id)=>{
            return (
                <div className={style.Field__item_column} key={id}>
                        {element.map((fig,id)=>{
                            return (
                            <p key={id} className={fig.style === "black" ? style.Field__item_black :style.Field__item_white}>{fig.text}</p>
                            )
                        })}
                </div> 
          )
        })}
    </div>
  )
}

export default Field