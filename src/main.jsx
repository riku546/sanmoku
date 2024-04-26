import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import Board from './Board.jsx'
import Reload from './reload.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reload />
    <Board />
  </React.StrictMode>,
)
