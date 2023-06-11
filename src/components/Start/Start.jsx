import {useSelector} from "react-redux"


const List = () => {
const listSliceData = useSelector(state => state)
const techologes = useSelector(state => state.startSlice.techologes)
  return (
    <div className="flex flex-col gap-4 pb-4">
        <p>
        {listSliceData.startSlice.name}
        </p>
        {techologes.map((tecnology,id)=>{
          return <a href={tecnology.link} className="text-blue-800 underline" key={id}>{tecnology.name}</a>
        })}
    </div>
  )
}

export default List