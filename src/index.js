import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
<<<<<<< HEAD
import DashBoard from './components/Dashboard'
=======
import Nutshell from './components/Nutshell'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> master
import './index.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
ReactDOM.render(
  <Router>
<<<<<<< HEAD
      <Nutshell />
<Login/>
<Register/>

=======
    <DashBoard />
>>>>>>> 4da9428ad7913d533b46b4813e287e9f6aabdfb5
  </Router>
  , document.getElementById('root'))
