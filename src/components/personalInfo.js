import React, { useEffect, useState } from 'react'
import Dustbin from '../garbage-can.png'

const PersonalInfo = ({Info, setInfo}) => {

  const [visited, setVisited] = useState(false);
  let personalInfo = {
    firstname : '',
    lastname : '',
    email : '',
    phone : '',
    address : '',
    linkedin : '',
    github : ''
  }
  // setInfo(personalInfo);
  // const [Info, setInfo] = useState([personalInfo]);
  // setDetails([personalInfo])
  // console.log(details)
  // console.log(typeof(Info))
  const handleSubmit = (e)=>{
    e.preventDefault();
    let val = e.target;
    personalInfo = {
      'jobTitle' : val.jobTitle.value,
      'firstname' : val.firstName.value,
      'lastname' : val.lastName.value,
      'email' : val.email.value,
      'phone' : val.phone.value,
      'address' : val.address.value,
      'linkedin' : val.linkedin.value,
      'github' : val.github.value
    }
    // setDetails(
      //   [PersonalInfo] = personalInfo
      //  {
      //   'firstname' : val.firstName.value,
      //   'lastname' : val.lastName.value,
      //   'email' : val.email.value,
      //   'phone' : val.phone.value,
      //   'address' : val.address.value,
      //   'linkedin' : val.linkedin.value,
      //   'github' : val.github.value
      // } 
    // )
    setInfo(personalInfo);
    setVisited(true);
    document.getElementById('summary').style.display = 'flex';
    document.getElementById('personalInfo').style.display = 'none';
    document.getElementById('icon-2').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 16.6%, #0000ff 0%)'
    document.getElementById('icon-1').innerHTML = '&#10003;'
    document.getElementById('icon-1').style.border = '3px solid white'
    console.log(Info)
  }
  const handleEnter = (event)=>{
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  const deleteData = ()=>{
    localStorage.removeItem('Info');
    document.getElementById('infoForm').reset();
    setInfo([]);
  }
  useEffect(()=>{
    localStorage.setItem('Info', JSON.stringify(Info))
  },[Info])

  return (
    <div className='personalInfo' id='personalInfo'>
        <div className="headingDiv">
            <h2>Your CV heading</h2>
            <p className='delete'>How to you want employees to contact you ? <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        <form id='infoForm' onSubmit={handleSubmit}>
            <input required onKeyDown={handleEnter}  type="text" name='jobTitle' id='jobTitle' placeholder='Job Title / College'/>
            <input required onKeyDown={handleEnter}  type="text" name='firstName' placeholder='First Name'/>
            <input required onKeyDown={handleEnter}  type="text" name='lastName' placeholder='Last Name'/>
            <input required onKeyDown={handleEnter}  type="email" name='email' placeholder='Enter Email'/>
            <input required onKeyDown={handleEnter}  type="tel" name='phone' placeholder='Enter Mobile'/>
            <input required onKeyDown={handleEnter}  type="address" name='address' id='address' placeholder='Enter Address'/>
            <input required onKeyDown={handleEnter}  type="url" name="linkedin" id="linkedin" placeholder='Linkedin Id'/>
            <input required onKeyDown={handleEnter}  type="url" name="github" id="github" placeholder='Github Id'/>
            <button className='btn'>Back</button>
            <button type='submit' className='btn saveBtn'>Save & Next</button>
        </form>
    </div>
  )
}

export default PersonalInfo