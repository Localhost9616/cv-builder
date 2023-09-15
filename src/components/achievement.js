import React, {useState, useEffect } from 'react'
import Dustbin from '../garbage-can.png'

const Achievement = ({Achievements, setAchievements}) => {
  const [visited, setVisited] = useState(false);
  // const handleEnter = (event)=>{
  //   if (event.keyCode === 13) {
  //     const form = event.target.form;
  //     const index = Array.prototype.indexOf.call(form, event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //   }
  // }
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
  
      if (index < form.elements.length - 1) {
        // If not the last input, move focus to the next input
        form.elements[index + 1].focus();
      } else {
        // If the last input, prevent form submission and focus on the "Back" button
        event.preventDefault();
        document.getElementById('backButton').focus(); // Replace 'backButton' with the actual ID
      }
    }
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setAchievements({
      achievement1 : e.target.achievement1.value, 
      achievement2 : e.target.achievement2.value, 
      achievement3 : e.target.achievement3.value, 
      achievement4 : e.target.achievement4.value, 
      achievement5 : e.target.achievement5.value
    })
    document.getElementById('icon-6').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 83%, #0000ff 0%)'
    document.getElementById('icon-5').innerHTML = '&#10003;'
    document.getElementById('icon-5').style.border = '3px solid white'
    nextPage();
  }
  const nextPage = ()=>{
    document.getElementById('project').style.display = 'flex';
    document.getElementById('achievements').style.display = 'none';
    console.log('gng')
    setVisited(true);
  }
  const prevPage = ()=>{
    document.getElementById('education').style.display = 'flex';
    document.getElementById('achievements').style.display = 'none';
    document.getElementById('project').style.display = 'none';
    console.log('gng1')
  }
  const deleteData = ()=>{
    localStorage.removeItem('Achievements');
    document.getElementById('form5').reset();
    setAchievements([]);
  }
  useEffect(()=>{
    localStorage.setItem('Achievements', JSON.stringify(Achievements))
    // if(visited){
    //   document.getElementById('icon-5').innerHTML = '&#10003;'
    //   document.getElementById('icon-5').style.border = '3px solid white'
    // }else{
    //   if(localStorage.getItem('Educations') !== '[]'){
    //     document.getElementById('icon-5').style.border = '3px solid lightgrey'
    //     document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 66.4%, #0000ff 0%)'
    //   }
    // }
  },[Achievements])
  return (
    <div className='achievements' id='achievements'>
        <div className="wrapper4">
            <h2>Achievements</h2>
            <p className='delete'>Showcase your Achievements to the world  <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>
        </div>
        <form id='form5' onSubmit={handleSubmit} action="">
            <input required onKeyDown={handleEnter} name='achievement1' placeholder='Achievement 1' type="text" />
            <input required onKeyDown={handleEnter} name='achievement2' placeholder='Achievement 2' type="text" />
            <input required onKeyDown={handleEnter} name='achievement3' placeholder='Achievement 3' type="text" />
            <input required onKeyDown={handleEnter} name='achievement4' placeholder='Achievement 4' type="text" />
            <input required onKeyDown={handleEnter} name='achievement5' placeholder='Optional' type="text" />
            <button onClick={prevPage} className='btn'>Back</button>
            <button type='Submit' className='btn saveBtn'>Save & Next</button>
        </form>
        {/* <button className='addIcon'><img src={AddIcon} alt="Error" /> <span>Add Achievements</span></button> */}
    </div>
  )
}

export default Achievement