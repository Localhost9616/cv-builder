import React, {useState, useEffect } from 'react'
import Dustbin from '../garbage-can.png'

const Summary = ({SummaryDetail, setSummaryDetail}) => {
  let summary = '';
  const [visited, setVisited] = useState(false);
  const submit = ()=>{
    let text = document.getElementById('textarea-1');
    summary = text.value;
    console.log(summary)
    let val = text.value;
    // if(details.length === 2 ){
    //   console.log('updating summary ...')
    //   details.pop();
    // }
      // setDetails((details) => [...details, summaryObj])
    setSummaryDetail(summary)
    setVisited(true);
    if(localStorage.getItem('Summary') !== []) setVisited(true)
    document.getElementById('experience').style.display = 'flex';
    document.getElementById('summary').style.display = 'none';
    document.getElementById('icon-3').style.border = '3px solid lightgrey'
    document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 33.2%, #0000ff 0%)'
    document.getElementById('icon-2').innerHTML = '&#10003;'
    document.getElementById('icon-2').style.border = '3px solid white'
  }
  const prevPage = ()=>{
    document.getElementById('summary').style.display = 'none';
    document.getElementById('personalInfo').style.display = 'flex';
  }
  const deleteData = ()=>{
    localStorage.removeItem('Summary');
    document.getElementById('textarea-1').value = '';
    setSummaryDetail('');
  }
  useEffect(()=>{
    localStorage.setItem('Summary', SummaryDetail);
    // if(visited){
    //   document.getElementById('icon-2').innerHTML = '&#10003;'
    //   document.getElementById('icon-2').style.border = '3px solid white'
    // }else{
    //   if(localStorage.getItem('Info') !== '[]'){
    //     document.getElementById('icon-2').style.border = '3px solid lightgrey'
    //     document.getElementById('nav').style.background = 'linear-gradient(80deg, #ff0000 16.6%, #0000ff 0%)'
    //     console.log('hiiii')
    //   }
    // }
    console.log(localStorage.getItem('Info') !== '[]')
  },[SummaryDetail])
  // console.log(details)
  return (
    <div className='summary' id='summary'>
      <div className="summaryDiv">
        <h2>Professional Summary</h2>
        <p className='delete'>Now let's add a summary  <img onClick={deleteData} title='Reset' src={Dustbin} alt="Error" /></p>  
        <textarea name="summary" id="textarea-1" cols="30" rows="10" placeholder='Breif Summary'></textarea>
      </div>
      <div className="btnDiv">
        <button onClick={prevPage} className='btn'>Back</button>
        <button onClick={submit} className='btn'>Save & Next</button>
      </div>
    </div>
  )
}

export default Summary;