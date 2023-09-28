import React from 'react'
import './education.css'

function Education2() {
  return (
    <div className='e'>
        <h1 className='e-head'>
            Education
        </h1>
        <div className="e-wrapper">
            <div className="e-card">
                <h2 className="e-card-title">
                    DAV Model School, IIT Kharagpur
                </h2>
                <p className="e-card-desc">
                    Physics + Chemistry + Mathematics + Computer Science + Phy Education, High School Diploma
                </p>
                <h3 className="e-card-subtitle">
                    2016 - 2023
                </h3>
            </div>
            <div className="e-card">
                <h2 className="e-card-title">
                    Indian Institue of Technology, Kharagpur
                </h2>
                <p className="e-card-desc">
                    Computer Science and Engineering, IIT Kharagpur Dual Degeree (Bachelors Of Technology B.Tech + Masters Of Technology M.Tech)
                </p>
                <h3 className="e-card-subtitle">
                    2023 - 2028
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Education2