import React from 'react'

const ExperienceBar = ({Experiences, index})=>{
    const monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let startYear = (Experiences) ? Experiences[index].start.split('-')[0] : '2020'
    let startMonth = (Experiences) ? Experiences[index].start.split('-')[1] : '01'
    let endYear = (Experiences) ? Experiences[index].end.split('-')[0] : '2021'
    let endMonth = (Experiences) ? Experiences[index].end.split('-')[1] : '07'
    console.log(startMonth, startYear , endMonth, endYear)
    return(
        <div className="experienceBar">
            <p>{`${Experiences ? Experiences[index].jobTitle : 'Product Designer'}, ${Experiences ? Experiences[index].company : 'LunchBox'}`}</p>
            <p>{`${Experiences ? Experiences[index].location : 'Dhaka, Bangladesh'}, ${Experiences ? `${startMonth}/${startYear}` : '{ 01/2020 }'} - ${Experiences ? `${endMonth}/${endYear}` : '{ 07/2021 }'}`}</p>
            <ul>
                <li>{`${Experiences ? Experiences[index].description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero reiciendis esse atque voluptatem, ab eius repellendus dig'}`}</li>
            </ul>
        </div>
    )
}

export default ExperienceBar;
