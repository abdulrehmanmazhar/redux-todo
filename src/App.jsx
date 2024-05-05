
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./components/Create";
import {Outlet} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
