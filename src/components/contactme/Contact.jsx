import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import './contact.css'

function Contact() {
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact Me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <AiFillMail className='c-icon' />
                        bikramghuku05@gmail.com
                    </div>
                    <div className="c-info-item">
                        <FaLocationDot className='c-icon' />
                        IIT Campus, IIT Kharagpur, West Bengal, India
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="c-card bg"></div>
                <div className="c-card">
                    <p className='c-desc'>
                        Message me to talk about anything. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <form className="c-form">
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button type="submit" className='c-btn'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact