import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit" 
import {persistStore,
    persistReducer,
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST,
    PURGE, 
    REGISTER} from "redux-persist"
import storage from "redux-persist/lib/storage" 
import startSlice from "./startSlice"
import fieldSlice from "./fieldSlice"
import todoSlice from "./todoSlice"

const rootReducer = combineReducers({
    startSlice : startSlice,
    fieldSlice : fieldSlice,
    todoSlice : todoSlice
    
})
const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const persistor = persistStore(store)
export {persistor}
export default store