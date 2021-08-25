import React from 'react'
import 'antd/dist/antd.css';
import '../styles/globals.css'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import configureStore  from '../reduxTest/store'
import rootReducer from '../reduxTest/reducers/rootReducer';


const store = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp;
