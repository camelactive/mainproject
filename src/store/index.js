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
import listSlice from "./listSlice"
import fieldSlice from "./fieldSlice"

const rootReducer = combineReducers({
    listSlice : listSlice,
    fieldSlice : fieldSlice
    
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