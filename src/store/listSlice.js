import {createSlice} from "@reduxjs/toolkit"

const listSlice = createSlice({
    name : "listSlice",
    initialState : {
        name :"listSlice name",
    },
    reducers : {
        listSliceReducer(state, actions){
            console.log("listSliceReducer")
        }
    }
})

export default listSlice.reducer
export const {listSliceReducer} = listSlice.actions