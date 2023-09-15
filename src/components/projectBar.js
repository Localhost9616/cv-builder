import React from 'react'

const ProjectBar = ({Projects, index})=>{
    const monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let startYear = (Projects) ? Projects[index].start.split('-')[0] : '2020'
    let startMonth = (Projects) ? Projects[index].start.split('-')[1] : '01'
    let endYear = (Projects) ? Projects[index].end.split('-')[0] : '2021'
    let endMonth = (Projects) ? Projects[index].end.split('-')[1] : '07'
    // console.log(startMonth, startYear , endMonth, endYear)
    return(
        <div className="projectBar">
            <p>{`${Projects ? Projects[index].projectName : 'SuperApp '}`}</p>
            {/* <p>{`${Projects ? Projects[index].university : 'IIT Bombay'} - ${Projects ? startYear : '{ 2020 }'}`}</p> */}
            <ul>
                <li>{`${Projects ? Projects[index].description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero reiciendis esse atque voluptatem, ab eius repellendus dig'}`}</li>
            </ul>
        </div>
    )
}

export default ProjectBar;
