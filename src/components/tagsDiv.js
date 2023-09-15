import React, { useEffect } from 'react'
import { useState } from 'react';

const TagsDiv = ({heading, Skills, setSkills, index}) => {
    const [text, setText] = useState('');
    const [arr, setArr] = useState([]);
    const changeText = (e)=>{
        setText(e.target.value);
    }
    console.log(Skills)
    const removeTag = (tag)=>{
        let updatedTags = arr.filter((val) => (val !== tag))
        setArr(updatedTags);
    }
    const addSkill = (e)=>{
        if(e.key === 'Enter'){
            setArr((arr) => [...arr, text]);
            setText('');
        }
        // setSkills((Skills)=> [...Skills,arr])
    }
    const updatedSkills = [...Skills];
    updatedSkills[index] = arr;
    console.log(arr)
    // Skills[index]= arr
    useEffect(()=>{
    setSkills(updatedSkills);
        localStorage.setItem('Skills', JSON.stringify(Skills))
        console.log(arr)
        console.log(Skills)
    }, [arr])
  return (
    <div className="tagsDiv">
        <h3>{heading}</h3>
        {arr.map((tag) => (
            <button className='btn-2'> 
                <span className='tagName'>{tag}</span> 
                <span onClick={remove => removeTag(tag)}>&#x2715;</span>
            </button>
        ))}
        <input id='skills' type="text" name='skills' value={text} placeholder='Add Skills' onKeyDown={addSkill} onChange={changeText}/>
    </div>
  )
}

export default TagsDiv