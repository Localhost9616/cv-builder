import React from 'react'
import Img1 from '../information (1).png'
import Img2 from '../report.png'
import Img3 from '../certificate.png'
import Img4 from '../medal-.png'
import Img5 from '../project-management (1).png'
import Img6 from '../open-book.png'
import Img7 from '../project-management.png'
import Img8 from '../icons8-download-48.png'
import Img9 from '../garbage-can.png'

const ProgressBar = () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    const step5 = document.getElementById('step5');
    const step6 = document.getElementById('step6');
    const step7 = document.getElementById('step7');

    const resetResume = ()=>{
        localStorage.clear();
        window.location.reload(true);
    } 

    // const elements = document.querySelectorAll('.step');
    // elements.map((index)=>{
    //     if(JSON.parse(localStorage.getItem('Info')) === []){
    //         document.getElementById('icon-1').style
    //     }
    
    // })


  return (
    <div className='progressBar'>
        <div className="nav" id='nav'>
            {/* <div className="progress"></div> */}
            <div className="step" id='step1'><div className='icon' id='icon-1'><img src={Img1} alt="&#10003;" /></div></div>
            <div className="step" id='step2'><div className='icon' id='icon-2'><img src={Img2} alt="" /></div></div>
            <div className="step" id='step3'><div className='icon' id='icon-3'><img src={Img3} alt="" /></div></div>
            <div className="step" id='step4'><div className='icon' id='icon-4'><img src={Img4} alt="" /></div></div>
            <div className="step" id='step5'><div className='icon' id='icon-5'><img src={Img5} alt="" /></div></div>
            <div className="step" id='step6'><div className='icon' id='icon-6'><img src={Img6} alt="" /></div></div>
            <div className="step" id='step7'><div className='icon' id='icon-7'><img src={Img7} alt="" /></div></div>
        </div>
        <div title='Coming soon' className="download" id='download'><img src={Img8} alt="Error" /></div>
        <div onClick={resetResume} className="resetResume" id='resetResume'><img src={Img9} alt="Error" /></div>
    </div>
  )
}

export default ProgressBar