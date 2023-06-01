import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : {
        todos : []
    },
    reducers : {
        addTodo(state,action){
            console.log(action.payload)
            state.todos.push({text:action.payload.text, done: false})
        },
        fieldSliceReducer(state, actions){
            console.log("todoSlice")
        }
    }
})

export default todoSlice.reducer
export const {fieldSliceReducer,addTodo} = todoSlice.actions