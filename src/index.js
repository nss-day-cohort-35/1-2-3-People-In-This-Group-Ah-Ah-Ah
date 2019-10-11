import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import DashBoard from './components/Dashboard'
import './index.css'

ReactDOM.render(
  <Router>
    <DashBoard />
  </Router>
  , document.getElementById('root'))
