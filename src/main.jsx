import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Routes'
import './styles/global.scss'


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)