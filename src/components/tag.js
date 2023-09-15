import React, { useEffect, useState } from 'react'
import TagsDiv from './tagsDiv';
import Dustbin from '../garbage-can.png'

const Tag = ({Skills, setSkills})=> {
    
      const prevPage = ()=>{
        document.getElementById('project').style.display = 'flex';
        document.getElementById('skillSection').style.display = 'none';
      }
      const nextPage = ()=>{
        document.getElementById('icon-7').innerHTML = '&#10003;'
      }
      const deleteData = ()=>{
        localStorage.removeItem('Skills');
        setSkills([]);
      }
  return (
    <div className="skillSection" id='skillSection'>
        <div className="wrapper-5">
            <h2>Skills</h2>
            <p className='delete'>Showcase your top 8 skills.  <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        {/* <div className="tagsDiv">
    
            {arr.map((tag) => (
                <button className='btn-2'> 
                    <span className='tagName'>{tag}</span> 
                    <span onClick={remove => removeTag(tag)}>&#x2715;</span>
                </button>
            ))}
            <input id='skills' type="text" name='skills' value={text} placeholder='Add Skills' onKeyDown={addSkill} onChange={changeText}/>
        </div> */}
        <TagsDiv heading = 'Languages' Skills={Skills} setSkills={setSkills} index={0}/>
        <TagsDiv heading = 'Framework/Libraries' Skills={Skills} setSkills={setSkills} index={1}/>
        <TagsDiv heading = 'Databases' Skills={Skills} setSkills={setSkills} index={2}/>
        <TagsDiv heading = 'Development Tools' Skills={Skills} setSkills={setSkills} index={3}/>
        <TagsDiv heading = 'Other Skills' Skills={Skills} setSkills={setSkills} index={4}/>
        <div className="btnDiv">
            <button onClick={prevPage} className='btn'>Back</button>
            <button onClick={nextPage} className='btn'>Save & Next</button>
        </div>
    </div>
  )
}

export default Tag;