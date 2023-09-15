import React, { useEffect } from 'react'
import location from '../location.png'
import linkedin from '../25325.png'
import github from '../25231.png'
import personalInfo from './personalInfo'

const Resume = ({Info, SummaryDetail, Experiences, Educations, Projects, Achievements, Skills, zoomLevel}) => {
  
  const resumePageStyle = {
    transform: `scale(${zoomLevel})`,
    'transform-origin': (zoomLevel > 1.5) ? 'top left' : 'top',
    top: (zoomLevel > 1.5) ? 0 : 20,
    left: (zoomLevel > 1.5) ? 0 : '',
    // left: '0'
  }

  // window.onload = ()=>{
  //   const ele = document.getElementById('resumePage');
  //   html2pdf(ele);
  // }

  // useEffect(()=>{
    // console.log(details)
  // },[details])

  return (
    <div className='resumePage' id='resumePage' style={resumePageStyle}>
      <div className="resumeheader" id='resumeheader'>
        <div className="div1">
          <h2>{`${Info.firstname || 'FirstName'} ${Info.lastname || 'LastName'}`}</h2>
          <p>{Info.jobTitle || 'Institute of Technology Guru Ghasidas University'}
          </p>
        </div>
        <div className="div2">
          <ul>
            <li>&#128222; {Info.phone || 9876543219}</li>
            <li><span><img src={location} alt="Error" /></span>{Info.address || 'Lucknow, Uttar Pradesh'}</li>
            <li>&#128231; <a href={`mailto:${Info.email}`}>Email</a></li>
            <li><span><img src={github} alt="Error" /></span><a href={Info.github}>  Github</a></li>
            <li><span><img src={linkedin} alt="Error" /></span> <a href={Info.linkedin}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="leftSection">
          <div className="Summary">
            <h4 className='Heading'>SUMMARY</h4>
            <hr />
            <p>{SummaryDetail}</p>
          </div>
          <div className="Experience">
            <h4 className='Heading'>EXPERIENCE</h4>
            <hr className='hr'/>
            {Experiences.map((index) => (
              <div className="div">
                <p>{index.jobTitle || ''}</p>
                <p className='company'>{index.company || ''}</p>
                <p>&#128197; {index.start || ''} - {index.end || ''}</p>
                <ul>
                  <li><span>{index.description || ''}</span></li>
                </ul>
              </div>
            ))}
          </div>
          <div className="Achievement">
            <h4 className='Heading'>ACHIEVEMENTS</h4>
            <hr />
            <ul>
              <li><span>{Achievements.achievement1 || ''}</span></li>
              <li><span>{Achievements.achievement2}</span></li>
              <li><span>{Achievements.achievement3}</span></li>
              <li><span>{Achievements.achievement4}</span></li>
              <li><span>{Achievements.achievement5}</span></li>
            </ul>
          </div>
          <div className="Skills">
            <h4 className='Heading'>SKILLS</h4>
            <hr />
            <ul>
              {console.log(Skills[0])}
              <li><span>Languages - </span><span>{(Skills[0]) ? Skills[0].map((val) => val + ', ') : ''}</span></li>
              <li><span>Frameworks - </span><span>{(Skills[1]) ? Skills[1].map((val) => val + ', ') : ''}</span></li>
              <li><span>Databases - </span><span>{(Skills[2]) ? Skills[2].map((val) => val + ', ') : ''}</span></li>
              <li><span>Development Tools - </span><span>{(Skills[3]) ? Skills[3].map((val) => val + ', ') : ''}</span></li>
              <li><span>Other Skills - </span><span>{(Skills[4]) ? Skills[4].map((val) => val + ', ') : ''}</span></li>
            </ul>   
          </div>
        </div>
        <div className="rightSection">
          <div className="Education">
            <h4 className='Heading'>EDUCATION</h4>
            <hr />
            {Educations.map((index) => (
              <div className="div">
                <p>{`${index.degree || ''} - ${index.marks}${(index.marks <= 10) ? ' CGPA' : ' %'}`}</p>
                <p className='university'>{index.university}</p>
                <p>&#128197; {index.start || ''} - {index.end || ''}</p>
              </div>
            ))}
          </div>
          <div className="projects">
            <h4 className='Heading'>PROJECTS</h4>
            <hr />
            {Projects.map((index) => (
              <div className="div">
                <span>{`${index.projectName} [ `}</span>
                <a href={index.live}>{(index.live !== '') ? 'Live' : ''}</a>
                <span>{(index.live !== '') ? ' | ' : ''}</span>
                <a href={index.github}>Github ]</a>
                <p>{index.description || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume;