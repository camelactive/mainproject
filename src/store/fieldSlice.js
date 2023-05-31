import {createSlice} from "@reduxjs/toolkit"

const fieldSlice = createSlice({
    name : "fieldSlice",
    initialState : {
        numbersOfFields : {
            rows : 8,
            columns : 8
        }
    },
    reducers : {
        fieldSliceReducer(state, actions){
            console.log("fieldSlice")
        }
    }
})

export default fieldSlice.reducer
export const {fieldSliceReducer} = fieldSlice.actions