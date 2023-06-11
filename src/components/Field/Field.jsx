import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fieldChangeReducer} from "../../store/fieldSlice"



const Field = () => {
const dispatch = useDispatch()
let {rows,columns} = useSelector(state => state.fieldSlice.numbersOfFields)
let [userRows ,setUserRows] = useState(rows)
let [userColumns,setUserColumns] = useState(columns)

function handleUserFieldSet() {
  dispatch(fieldChangeReducer({userRows,userColumns}))
}
const fieldArr = []
for (let idx = 0; idx < rows; idx++) {
  fieldArr.push([])
}
fieldArr.map((row,id) => {
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
  return (
    <div className="flex flex-col bg-amber-900 w-full p-6 gap-2">
      <div className="flex flex-col gap-y-2 w-1/4 m-auto items-center">
        <label className="flex justify-between text-lg md:text-4xl w-40 md:w-80">к-во колонок:
          <div>
            <input className="w-10 h-10" type="text" placeholder={rows} value={userRows} onChange={e => setUserRows(userRows = e.target.value)}/>
          </div>
     
        </label>
        <label className="flex justify-between text-lg md:text-4xl w-40 md:w-80">к-во строк:
          <div> 
            <input className="w-10 h-10" type="text" placeholder={columns} value={userColumns} onChange={e => setUserColumns(userRows = e.target.value)}/>
          </div>
        
        </label>
      </div>
      <button className="bg-green-700 p-4 w-min rounded-xl text-yellow-200 m-auto" onClick={handleUserFieldSet}>go</button>
    <div className="flex justify-center items-center ">
        {fieldArr.map((element,id)=>{
            return (
                <div key={id}>
                        {element.map((fig,id)=>{
                            return (
                            <p key={id} className={fig.style === "black" ?  "blackCell": `whiteCell` }>{fig.text}</p>
                            )
                        })}
                </div> 
          )
        })}
    </div>
    </div>
  )
}

export default Field