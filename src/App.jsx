import React from 'react'
import Nav from './COMPONENTS/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './COMPONENTS/Create'
import Users from './COMPONENTS/Users'
import Edit from './COMPONENTS/Edit'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route element={<Create/>} path='/create'/>
            <Route element={<Users/>} path='/users'/>
            <Route element={<Edit/>} path='/edit/:abc'/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App