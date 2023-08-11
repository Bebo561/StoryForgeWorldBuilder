import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Start from './Pages/StartPage.tsx'
import HomePage from './Pages/HomePage.tsx'
import LoginPage from './Pages/LoginPage.tsx'
import RegisterPage from './Pages/RegisterPage.tsx'
import AboutUs from './Pages/AboutUs.tsx'
import NameGenerator from './Pages/NameGenerator.tsx'
import RacePage from './Pages/RacePage.tsx'
import ClassPage from './Pages/ClassPage.tsx'
import StatsPage from './Pages/StatsPage.tsx'

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path = '/' element={<Start/>}/>
        <Route path ='/Home' element={<HomePage/>}>
          <Route index element={<AboutUs />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Name" element={<NameGenerator />} />
          <Route path="Race" element={<RacePage />} />
          <Route path="Class" element={<ClassPage />} />
          <Route path="Stats" element={<StatsPage />} />
        </Route>
        <Route path ='/EmailLogin' element={<LoginPage/>}/>
        <Route path = '/Register' element={<RegisterPage/>}/>
      </Routes>
  </React.Fragment>
  )
}

export default App
