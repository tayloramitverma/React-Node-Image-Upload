import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import ImageUpload from './ImageUpload'
import ToolKit from './ToolKit'
import reportWebVitals from './reportWebVitals';
import { configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducers from './reducers/userReducers'


const store = configureStore({
  reducer: userReducers
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToolKit />
      <ImageUpload />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
