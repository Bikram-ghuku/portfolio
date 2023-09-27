import './about.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import React from 'react'
import profImg from '../../img/meFull.jpg'

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={profImg} alt='' className="a-img" />
            </div>
        </div>

        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className="a-sub">
                Hello, I'm Bikram Ghuku, a Computer Science Engineering fresher currently pursuing my studies at the prestigious <u>Indian Institute of Technology, Kharagpur</u>. 
                With a strong foundation in the <u>MERN stack</u> and proficiency in multiple programming languages, including JavaScript and Python, I am excited about the endless possibilities in the world of technology.<br/><br/>

                My passion for technology extends beyond the classroom. I'm an enthusiast in the field of robotics and a competitive programmer, consistently seeking new challenges. 
                Moreover, I have a keen interest in web development, and I actively contribute to open-source projects to expand my knowledge and skills.<br/><br/>

                Outside of the digital realm, I'm a chess enthusiast, always eager for a strategic match.
            </p>
            <div className="a-social">
                <div className="linkedIn">
                    <a href="https://www.linkedin.com/in/bikram-ghuku/" className="a-icon">
                        <AiFillLinkedin />
                    </a>
                </div>
                <div className="github">
                    <a href="https://www.github.com/bikram-ghuku" className="a-icon">
                        <AiFillGithub />
                    </a>
                </div>
                <div className="hackerrank">
                    <a href="https://www.hackerrank.com/bikramghuku05" className="a-icon">
                        <FaHackerrank />
                    </a>
                </div>
                <div className="cf">
                    <a href="https://codeforces.com/profile/bikramghuku" className="a-icon">
                        <SiCodeforces />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About