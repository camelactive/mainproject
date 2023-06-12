import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./store/index"
import {PersistGate} from "redux-persist/integration/react"
import {persistor} from "./store/index"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App/>   
    </Provider>
  </PersistGate>


);


