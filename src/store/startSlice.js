import {createSlice} from "@reduxjs/toolkit"

const startSlice = createSlice({
    name : "listSlice",
    initialState : {
        name :"Tecnologes uses in main project",
        techologes: [
            {name:"React JS", link : "https://react.dev/"},
            {name:"Redux", link : "https://redux.js.org/"},
            {name:"Redux toolkit", link : "https://redux-toolkit.js.org/"},
            {name:"Tailwind Css", link : "https://tailwindcss.com/"}
        ]
    },
    reducers : {
        listSliceReducer(state, actions){
            console.log("listSliceReducer")
        }
    }
})

export default startSlice.reducer
export const {listSliceReducer} = startSlice.actions