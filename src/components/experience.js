import React, { useEffect, useState } from 'react'
import AddIcon from '../add.png'
import Experienceform from './experienceform'
import ExperienceBar from './experienceBar'
import Dustbin from '../garbage-can.png'

const Experience = ({Experiences, setExperiences}) => {

  const [visited, setVisited] = useState(false);
  const [val, setval] = useState(false);
  const handleEnter = (event)=>{
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  
  const addExperience = ()=>{
    // submit()
    setExperiences((Experiences) => [...Experiences , {
      jobTitle : '',
      company : '',
      location : '',
      start : '',
      end : '',
      description : '',
    }])
    console.log('hi')
    
  }
  const submit = (e)=>{
    e.preventDefault();
    console.log(e)
    setExperiences((Experiences) => [...Experiences , {
      jobTitle : e.target.jobTitle.value,
      company : e.target.company.value,
      location : e.target.location.value,
      start : e.target.start.value,
      end : e.target.end.value,
      description : e.target.description.value,
    }])
    console.log(Experiences)
    if(e.nativeEvent.submitter.className === 'btn saveBtn') nextPage()
  }
  const reset = ()=> setval(true);
  const nextPage = ()=>{
    document.getElementById('education').style.display = 'flex';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('icon-4').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 49.8%, #0000ff 0%)'
    document.getElementById('icon-3').innerHTML = '&#10003;'
    document.getElementById('icon-3').style.border = '3px solid white'
    setVisited(true);
  }
  const prevPage = ()=>{
    document.getElementById('summary').style.display = 'flex';
    document.getElementById('experience').style.display = 'none';
  }
  const deleteData = ()=>{
    localStorage.removeItem('Experiences');
    document.getElementById('form').reset();
    setExperiences([]);
  }
  useEffect(()=>{
    console.log(Experiences)
    localStorage.setItem('Experiences', JSON.stringify(Experiences))
    if(val) document.getElementById('form').reset();
    setval(false);
    // if(visited){
    //   document.getElementById('icon-3').innerHTML = '&#10003;'
    //   document.getElementById('icon-3').style.border = '3px solid white'
    // }else{
    //   if(localStorage.getItem('Summary') !== ''){
    //     document.getElementById('icon-3').style.border = '3px solid lightgrey'
    //     document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 33.2%, #0000ff 0%)'
    //   }
    // }
    // document.getElementById('form').reset();
  },[Experiences])
  return (
    <div className='experience' id='experience'>
        <div className="wrapper3">
            <h2>Experience</h2>
            <p className='delete'>Review your experience journey  <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        {Experiences.map((val, index) => <ExperienceBar Experiences={Experiences} index={index}/>)}
        {/* <ExperienceBar /> */}
        <form id='form' onSubmit={submit} action="">
            <input required onKeyDown={handleEnter} type="text" name='jobTitle' placeholder='Job Title' className='jobTitle'/>
            <input required onKeyDown={handleEnter} type="text" name='company' placeholder='Company'/>
            <input required onKeyDown={handleEnter} type="text" name='location' placeholder='Location'/>
            <input required onKeyDown={handleEnter} type="month" name="start" id="startDate" placeholder='Start Date' />
            <input required onKeyDown={handleEnter} type="month" name="end" id="endDate" placeholder='End Date'/>
            <textarea required name="description" id="textarea-2" cols="30" rows="8" placeholder='Key Responsibility'></textarea>
            <button type='submit' onSubmit={addExperience} onClick={reset} className='addIcon'><img src={AddIcon} alt="Error" /> <span>Add Experience</span></button>
            <button onClick={prevPage} className='btn'>Back</button>
            <button type='submit' className='btn saveBtn'>Save & Next</button>
        </form>
        {/* <form onSubmit={submit} action="">
            <input type="text" name='jobTitle' placeholder='Job Title' className='jobTitle'/>
            <input type="text" name='company' placeholder='Company'/>
            <input type="text" name='location' placeholder='Location'/>
            <input type="date" name="start" id="startDate" placeholder='Start Date' />
            <input type="date" name="end" id="endDate" placeholder='End Date'/>
            <textarea name="description" id="textarea-2" cols="30" rows="8" placeholder='Key Responsibility'></textarea>
            <button className='btn'>Back</button>
            <button type='submit' className='btn'>Save & Next</button>
        </form>
         <Experienceform Experiences={Experiences} setExperiences={setExperiences}/>
        <Experienceform Experiences={Experiences} setExperiences={setExperiences}/>
        <Experienceform/> */}
        {/* <div className="btnDiv"> */}
        {/* </div> */}
    </div>
  )
}

export default Experience