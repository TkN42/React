import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppIki from './AppIki.jsx'
import AppUc from './AppUc.jsx'
import AppOdev from './AppOdev.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppOdev />
    {/* <AppUc /> */}
    {/* <AppIki /> */}
    {/* <App /> */}
  </React.StrictMode>,
)
