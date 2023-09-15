import React, { useEffect, useState } from 'react'
import ProjectBar from './projectBar';
import AddIcon from '../add.png'
import Dustbin from '../garbage-can.png'

const Project = ({Projects, setProjects}) => {
  const [val, setval] = useState(false);
  const [visited, setVisited] = useState(false);
  const handleEnter = (event)=>{
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setProjects((Projects)=>[
      ...Projects, {
        projectName : e.target.projectName.value,
        start : e.target.start.value,
        end : e.target.end.value,
        live : e.target.live.value,
        github : e.target.github.value,
        description : e.target.description.value,
      }
    ])
    if(e.nativeEvent.submitter.className === 'btn saveBtn') nextPage()
  }
  const reset = ()=> setval(true);
  const nextPage = ()=>{
    document.getElementById('skillSection').style.display = 'flex';
    document.getElementById('project').style.display = 'none';
    document.getElementById('icon-7').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 100%, #0000ff 0%)'
    document.getElementById('icon-6').innerHTML = '&#10003;'
    document.getElementById('icon-6').style.border = '3px solid white'
    setVisited(true);
  }
  const prevPage = ()=>{
    document.getElementById('achievements').style.display = 'flex';
    document.getElementById('project').style.display = 'none';
  }
  const deleteData = ()=>{
    localStorage.removeItem('Projects');
    document.getElementById('resetProject').reset();
    setProjects([]);
  }
  useEffect(()=>{
    localStorage.setItem('Projects', JSON.stringify(Projects))
    // if(visited){
    //   document.getElementById('icon-6').innerHTML = '&#10003;'
    //   document.getElementById('icon-6').style.border = '3px solid white'
    // }else{
    //   if(localStorage.getItem('Achievements') !== '[]'){
    //     document.getElementById('icon-6').style.border = '3px solid lightgrey'
    //     document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 83.2%, #0000ff 0%)'
    //   }
    // }
    if(val) document.getElementById('resetProject').reset();
    setval(false);
  },[Projects])
  return (
    <div className='project' id='project'>
        <div className="wrapper6">
            <h2>Projects</h2>
            <p className='delete'>Review your projects journey <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        {Projects.map((val, index)=> <ProjectBar Projects={Projects} index={index}/>)}
        <form id='resetProject' onSubmit={handleSubmit} action="">
            <input required onKeyDown={handleEnter}  type="text" name='projectName' placeholder='Project Name' className='ProjectName'/>
            <input required onKeyDown={handleEnter}  type="month" name="start" id="startDate" placeholder='Start Date' />
            <input required onKeyDown={handleEnter}  type="month" name="end" id="endDate" placeholder='End Date'/>
            <input onKeyDown={handleEnter}  type="url" name="live" id="live" placeholder='Live Link'/>
            <input required onKeyDown={handleEnter}  type="url" name="github" id="github" placeholder='Github Link'/>
            <textarea required name="description" id="textarea-2" cols="30" rows="8" placeholder='Description'></textarea>
            <button id='addBtn' onClick={reset} type='submit' className='addIcon'><img src={AddIcon} alt="Error" /> <span>Add Project</span></button>
            <button onClick={prevPage} className='btn'>Back</button>
            <button type='submit' className='btn saveBtn'>Save & Next</button>
        </form>
    </div>
  )
}

export default Project