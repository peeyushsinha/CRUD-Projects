import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"
import Create from "./Components/Create"
import Read from "./Components/Read"
import Update from "./Components/Update"
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App