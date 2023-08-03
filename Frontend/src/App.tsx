import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './Pages/StartPage.tsx'
import HomePage from './Pages/HomePage.tsx'
import LoginPage from './Pages/LoginPage.tsx'
import RegisterPage from './Pages/RegisterPage.tsx'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path = '/' element={<Start/>}/>
        <Route path ='/Home' element={<HomePage/>}/>
        <Route path ='/EmailLogin' element={<LoginPage/>}/>
        <Route path = '/Register' element={<RegisterPage/>}/>
      </Routes>
  </React.Fragment>
  )
}

export default App
