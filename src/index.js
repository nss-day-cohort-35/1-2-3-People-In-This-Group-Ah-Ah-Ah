import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/Nutshell'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
ReactDOM.render(
  <Router>
      <Nutshell />
<Login/>
<Register/>

  </Router>
  , document.getElementById('root'))
