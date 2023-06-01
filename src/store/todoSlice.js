import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : {
        todos : []
    },
    reducers : {
        addTodoAction(state,action){
            console.log(action.payload)
            state.todos.push({text:action.payload.text, isDone: false})
        },
        deleteTodoAction(state, action){
            state.todos = state.todos.filter((todo,id)=> id !== action.payload.id)
       },
          doneTodoAction(state, action){
            state.todos.map((todo,id)=>{
                if (id === action.payload.id) {
                    return (todo.isDone = !todo.isDone)
                }
                else {
                    return (todo)
                }
            })},

        fieldSliceReducer(state, actions){
            console.log("todoSlice")
        }
    }
})

export default todoSlice.reducer
export const {fieldSliceReducer,addTodoAction,deleteTodoAction,doneTodoAction} = todoSlice.actions