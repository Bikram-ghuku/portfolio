import React from 'react'
import './education.css'
import { education_data } from './education_data.js'


function Education2() {
  return (
    <div className='e'>
        <h1 className='e-head'>
            Education
        </h1>
        <div className="e-wrapper">
            {education_data.map((data, key) => (
                <div className="e-card">
                    <h2 className='e-card-titel'>{data.Name}</h2>
                    <p className='e-card-desc'>{data.Desc}</p>
                    <h3 className='e-card-subtitle'>{data.Years}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education2