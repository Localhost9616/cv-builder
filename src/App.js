import React from 'react'
import HomePage from './homepage'
import Page1 from './page1'
import PersonalInfo from './components/personalInfo'
import Summary from './components/summary'
import Experience from './components/experience'
import Education from './components/education'
import Achievement from './components/achievement'
import Skills from './components/tag'
import Project from './components/project'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/myresume" element={ <Page1/> } />
      </Routes>
    </BrowserRouter>
    // <>
      // <Page1/>
      // <HomePage/>
    // </>
  )
}

export default App
