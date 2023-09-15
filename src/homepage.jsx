import React from 'react'
import { Link } from 'react-router-dom';
import Img from './25231.png'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="textDiv">
            <div className="txt">
                <h1>Craft Your Professional Story</h1>
                <p>Your Career, Your Resume, Our Expertise</p>
                <Link to='/myresume'><button className='link'>Build My Resume</button></Link>
            </div>
        </div>
        <div className="skewDiv">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbRggvmhB6fMw3eTiZ6jjbNjGfUkeDD6cbuYO0M3ObO22fb2m-k-O7ysyGlYULC3tI-4&usqp=CAU" alt="" /> */}
        </div>
    </div>
  )
}

export default Homepage;