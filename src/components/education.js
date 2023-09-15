import React, { useEffect, useState } from 'react'
import AddIcon from '../add.png'
import Experience from './experience';
import EducationBar from './educationBar';
import Dustbin from '../garbage-can.png'

const Education = ({Educations, setEducations}) => {
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
    setEducations((Educations)=>[
      ...Educations, {
        degree : e.target.degree.value,
        university : e.target.university.value,
        marks : e.target.marks.value,
        start : e.target.start.value,
        end : e.target.end.value,
      }
    ])
    if(e.nativeEvent.submitter.className === 'btn saveBtn') nextPage()
  }
  const reset = ()=> setval(true);
  const nextPage = ()=>{
    document.getElementById('achievements').style.display = 'flex';
    document.getElementById('education').style.display = 'none';
    document.getElementById('icon-5').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 66.4%, #0000ff 0%)'
    document.getElementById('icon-4').innerHTML = '&#10003;'
    document.getElementById('icon-4').style.border = '3px solid white'
    setVisited(true);
  }
  const prevPage = ()=>{
    document.getElementById('experience').style.display = 'flex';
    document.getElementById('education').style.display = 'none';
  }
  const deleteData = ()=>{
    localStorage.removeItem('Educations');
    document.getElementById('resetEducation').reset();
    setEducations([]);
  }
  useEffect(()=>{
    localStorage.setItem('Educations', JSON.stringify(Educations))
    if(val) document.getElementById('resetEducation').reset();
    // if(visited){
    //   document.getElementById('icon-4').innerHTML = '&#10003;'
    //   document.getElementById('icon-4').style.border = '3px solid white'
    // }else{
    //   if(localStorage.getItem('Experiences') !== '[]'){
    //     document.getElementById('icon-4').style.border = '3px solid lightgrey'
    //     document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 49.8%, #0000ff 0%)'
    //   }
    // }
    setval(false);
  },[Educations])
  return (
    <div className='education' id='education'>
        <div className="wrapper3">
            <h2>Education</h2>
            <p className='delete'>Review your educational journey <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        {Educations.map((val, index)=> <EducationBar Educations={Educations} index={index}/>)}
        <form id='resetEducation' onSubmit={handleSubmit} action="">
            <input required onKeyDown={handleEnter}  type="text" name='degree' placeholder='Degree' className='jobTitle'/>
            <input required onKeyDown={handleEnter}  type="text" name='university' placeholder='University'/>
            <input required onKeyDown={handleEnter}  type="number" name='marks' placeholder='Percentage'/>
            <input required onKeyDown={handleEnter}  type="month" name="start" id="startDate" placeholder='Start Date' />
            <input required onKeyDown={handleEnter}  type="month" name="end" id="endDate" placeholder='End Date'/>
            <button id='addBtn' onClick={reset} type='submit' className='addIcon'><img src={AddIcon} alt="Error" /> <span>Add Education</span></button>
            <button onClick={prevPage} className='btn'>Back</button>
            <button type='submit' className='btn saveBtn'>Save & Next</button>
        </form>
        

    </div>
  )
}

export default Education