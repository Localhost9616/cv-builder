import React from 'react'

const EducationBar = ({Educations, index})=>{
    const monthArr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let startYear = (Educations) ? Educations[index].start.split('-')[0] : '2020'
    let startMonth = (Educations) ? Educations[index].start.split('-')[1] : '01'
    let endYear = (Educations) ? Educations[index].end.split('-')[0] : '2021'
    let endMonth = (Educations) ? Educations[index].end.split('-')[1] : '07'
    // console.log(startMonth, startYear , endMonth, endYear)
    return(
        <div className="educationBar">
            <p>{`${Educations ? Educations[index].degree : 'B.Tech '}`}</p>
            <p>{`${Educations ? Educations[index].university : 'IIT Bombay'} - ${Educations ? startYear : '{ 2020 }'}`}</p>
            {/* <ul>
                <li>{`${Educations ? Educations[index].description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In vero reiciendis esse atque voluptatem, ab eius repellendus dig'}`}</li>
            </ul> */}
        </div>
    )
}

export default EducationBar;
