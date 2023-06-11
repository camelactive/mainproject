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
        },
        fieldChangeReducer(state, action){
            if (action.payload.userRows > 20 || action.payload.userColumns > 20) {
                alert("Колличество строк или столбцов не может превышать 20")
            }
            if (action.payload && action.payload.userRows && action.payload.userRows <= 20) {
                state.numbersOfFields.rows = action.payload.userRows
            }
            if (action.payload && action.payload.userColumns && action.payload.userColumns <= 20) {
                state.numbersOfFields.columns = action.payload.userColumns
            }
        }
    }
})

export default fieldSlice.reducer
export const {fieldSliceReducer,fieldChangeReducer} = fieldSlice.actions