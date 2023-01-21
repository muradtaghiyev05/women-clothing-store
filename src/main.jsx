import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.sass'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

