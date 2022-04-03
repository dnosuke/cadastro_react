import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/Navbar'
import { AppRoutes } from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
)
