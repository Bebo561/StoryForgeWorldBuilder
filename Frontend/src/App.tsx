import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './Pages/StartPage.tsx'
import Header from './Pages/Header.tsx'

function App() {

  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path = '/' element={<Start/>}/>
      </Routes>
  </React.Fragment>
  )
}

export default App
