import React, { useEffect, useState } from 'react'

const Experienceform = () => {
    const [experience,setExperience] = useState([]);
    const [listOfExperience, setListOfExperience] = useState(JSON.parse(localStorage.getItem('experienceList')) || []);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        // experience[0] = e.target.jobTitle.value
        let val = e.target;
        setExperience((experience) => [...experience, val.jobTitle.value, val.company.value, val.start.value, val.end.value, val.description.value])
    }
    useEffect(()=>{
        localStorage.setItem('experienceList', JSON.stringify(listOfExperience))
        setListOfExperience((listOfExperience)=> [...listOfExperience, experience])
    },[experience])
    // console.log(listOfExperience)

    // console.log(document.getElementById('jobTitle').value)
  return (
    <form onSubmit={handleSubmit} action="">
        <input type="text" name='jobTitle' placeholder='Job Title' className='jobTitle' id='jobTitle'/>
        <input type="text" name='company' placeholder='Company'/>
        <input type="text" name='location' placeholder='Location'/>
        <input type="date" name="start" id="startDate" placeholder='Start Date' />
        <input type="date" name="end" id="endDate" placeholder='End Date'/>
        <textarea name="description" id="textarea-2" cols="30" rows="8" placeholder='Key Responsibility'></textarea>
        <button type="submit">save</button>
    </form>
  )
}

export default Experienceform