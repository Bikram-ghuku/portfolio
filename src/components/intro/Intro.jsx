import React from 'react'
import './intro.css'
function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Bikram Ghuku</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Undergrad Student</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Competitive programmer</div>
                  </div>
                </div>
                <p className="i-desc">
                Hello, I'm Bikram Ghuku, a Computer Science Engineering undergrad currently pursuing my studies at the prestigious Indian Institute of Technology, Kharagpur. With a strong foundation in the MERN stack and proficiency in multiple programming languages, including JavaScript and Python, I am excited about the endless possibilities in the world of technology.<br/><br/>
                </p>
            </div>
        </div>
        <div className="i-right">Right</div>
    </div>
  )
}

export default Intro