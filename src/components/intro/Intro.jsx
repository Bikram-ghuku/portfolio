import React from 'react'
import './intro.css'
import img from '../../img/me.png'
function Intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Bikram Ghuku</h1>
                <div className="i-title">
                  <div className="i-title-wrapper">
                    <div className="i-title-item">Undergraduate Student</div>
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Competitve Programmer</div>
                  </div>
                </div>
                <p className="i-desc">
                Hello, I'm Bikram Ghuku, a Computer Science Engineering undergrad currently pursuing my studies at the prestigious Indian Institute of Technology, Kharagpur. <br/><br/>
                </p>
            </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            <img src={img} alt="" className="i-img" />
          </div>
        </div>
    </div>
  )
}

export default Intro