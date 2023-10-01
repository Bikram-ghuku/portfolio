import React from 'react'
import './skills.css'
import { skills_data } from '../../skills'

function Skills() {
  return (
    <div className='sk'>
        <h1 className="sk-title">Skills</h1>
        <div className="sk-container">
            {skills_data.map((skill, index) => (
                <div className="sk-card" key={index}>
                    <div className="sk-img-cont">
                        <img src={skill.img} alt="skill" className='sk-img'/>
                    </div>
                    <div className="sk-name">{skill.Name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills