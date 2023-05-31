import {useSelector} from "react-redux"


const List = () => {
const listSliceData = useSelector(state => state)

  return (
    <div className="List">
        List
        <p>
        {listSliceData.listSlice.name}
        </p>
    </div>
  )
}

export default List