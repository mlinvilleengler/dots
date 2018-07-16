import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { config } from './config'
import './index.css'

const ConfigContext = React.createContext({ config })

ReactDOM.render(
  <Provider store={store}>
    <ConfigContext.Provider><App /></ConfigContext.Provider>
  </Provider>,
  document.getElementById('root')
)
