import React, { useEffect, useState } from 'react'
import Header from './components/header.js'
import PersonalInfo from './components/personalInfo.js'
import Slider from './components/slider.js'
import Resume from './components/resume.js'
import Summary from './components/summary.js'
import Experience from './components/experience.js'
import Education from './components/education.js'
import Achievement from './components/achievement.js'
import Project from './components/project.js'
import Tag from './components/tag.js'
import ProgressBar from './components/progressBar.js'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Print from './print.js'

const Page1 = () => {
  // let [details, setDetails] = useState({
  //   PersonalInfo : [],
  //   Summary : [],
  //   Experience : []
  // });
  const [Info, setInfo] = useState(JSON.parse(localStorage.getItem('Info')) || []);
  const [SummaryDetail, setSummaryDetail] = useState(localStorage.getItem('Summary') || []);
  const [Educations, setEducations] = useState(JSON.parse(localStorage.getItem('Educations')) || []);
  const [Experiences, setExperiences] = useState(JSON.parse(localStorage.getItem('Experiences')) || []);
  const [Skills, setSkills] = useState(JSON.parse(localStorage.getItem('Skills')) || []);
  const [Achievements, setAchievements] = useState(JSON.parse(localStorage.getItem('Achievements')) || []);
  const [Projects, setProjects] = useState(JSON.parse(localStorage.getItem('Projects')) || []);
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = () => (zoomLevel < 3)? setZoomLevel(zoomLevel + 0.5) : setZoomLevel(zoomLevel);
  const zoomOut = () => (zoomLevel > 1)? setZoomLevel(zoomLevel - 0.5) : setZoomLevel(zoomLevel);
  
  // useEffect(()=>{
  //  console.log(details) 
  // },[details])
  return (
    <div className='page1' id='page1'>
        <Header/>
        {/* <Print/> */}
        <ProgressBar/>
        <div className="resumeDiv">
            <div className="data">
                <PersonalInfo Info={Info} setInfo={setInfo}/>
                <Summary SummaryDetail={SummaryDetail} setSummaryDetail={setSummaryDetail}/>
                <Experience Experiences={Experiences} setExperiences={setExperiences}/>
                <Education Educations={Educations} setEducations={setEducations}/>
                <Achievement Achievements={Achievements} setAchievements={setAchievements}/>
                <Project Projects={Projects} setProjects={setProjects}/>
                <Tag Skills={Skills} setSkills={setSkills}/>
            </div>
            <div className="resume">
                <button onClick={zoomIn} id='zoomIn'>+</button>
                <button onClick={zoomOut} id='zoomOut'>-</button>
                <Resume Info={Info} SummaryDetail={SummaryDetail} Experiences={Experiences} Educations={Educations} Projects={Projects} Achievements={Achievements} Skills={Skills} zoomLevel={zoomLevel}/>
            </div>
        </div>
    </div>
  )
}

export default Page1