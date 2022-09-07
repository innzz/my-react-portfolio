import React from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
import {ImLocation} from 'react-icons/im';
import {GoMarkGithub} from 'react-icons/go';
import {SiLinkedin} from 'react-icons/si';
import {RiMailOpenFill} from 'react-icons/ri';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {IoIosSend} from 'react-icons/io';
import {Row} from 'react-bootstrap'

function Contact ({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  setActive('Contact')
  return (
    <div className='secondary-body' style={toggleDarkMode?{background:'#111'}:{background:'rgb(244, 253, 255)'}}>
    <div className='contact-page' >
      <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className='heading'>
        GET IN <span>TOUCH</span>
        <span style={toggleDarkMode?{color:'rgb(47, 47, 47)'}:{color:'rgba(30,37,48,.07)'}} className="secondary-heading">
          CONTACT
        </span>
      </h1>
      <div className="contact-content">
        <div className="contact-details">
          <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} >DON'T BE SHY !</h1>
          <p style={toggleDarkMode?{color:'rgb(250, 250, 250)'}:{color:'#777'}}>Let's have some Words.</p>
          <div className="logo-heading-content">
            <ImLocation size={35} />
            <div className="heading-content">
            <h3 style={toggleDarkMode?{color:'rgb(211, 211, 211)'}:{color:'#666'}} >ADDRESS POINT</h3>
            <p style={toggleDarkMode?{color:'rgb(250, 250, 250)'}:{color:'#777'}} >INDIA, MUMBAI, DADAR <br />MUMBAI:- 400015</p>
            </div>
          </div>
          <div className="logo-heading-content">
            <RiMailOpenFill size={35} />
            <div className="heading-content">
            <h3 style={toggleDarkMode?{color:'rgb(211, 211, 211)'}:{color:'#666'}} >MAIL ME</h3>
            <p style={toggleDarkMode?{color:'rgb(250, 250, 250)'}:{color:'#777'}} >inzamam.pawaskar@gmail.com</p>
            </div>
          </div>
          <div className="logo-heading-content">
            <FaPhoneSquareAlt size={35} />
            <div className="heading-content">
            <h3 style={toggleDarkMode?{color:'rgb(211, 211, 211)'}:{color:'#666'}} >CALL ME</h3>
            <p style={toggleDarkMode?{color:'rgb(250, 250, 250)'}:{color:'#777'}} >+91 9137338941</p>
            </div>
          </div>
          <div className="account-links">
              <a href="https://www.linkedin.com/in/inzamam-pawaskar-6248bb226/" target="_blank" rel="noreferrer"><SiLinkedin color='rgb(113, 221, 255)' size={28} /></a>
              <a href="https://github.com/innzz" target="_blank" rel="noreferrer"><GoMarkGithub color='rgb(113, 221, 255)' size={28} /></a>
            </div>
        </div>
        <div className="contact-inputs-container">
          <Row>
            <input style={toggleDarkMode?{background:'rgb(47, 47, 47)',color:'#fff'}:{background:'rgb(244, 253, 255)',color:'#666'}} type="text" name='firstName' placeholder='YOUR NAME' />
            <input style={toggleDarkMode?{background:'rgb(47, 47, 47)',color:'#fff'}:{background:'rgb(244, 253, 255)',color:'#666'}} type="email" name='email' placeholder='YOUR EMAIL'/>
          </Row>
          <Row>
          <input style={toggleDarkMode?{background:'rgb(47, 47, 47)',color:'#fff'}:{background:'rgb(244, 253, 255)',color:'#666'}} type="text" name='subject' placeholder='YOUR SUBJECT' />
          </Row>
          <Row>
          <textarea style={toggleDarkMode?{background:'rgb(47, 47, 47)',color:'#fff'}:{background:'rgb(244, 253, 255)',color:'#666'}} name="message" placeholder='YOUR MESSAGE'></textarea>
          </Row>
        <div className="more-about-me-section">
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>SEND MESSAGE</span>
                <span></span>
                <span><IoIosSend size={30} color={'white'}/></span>
              </div>
            </div>
        </div>
      </div>
    </div>
      <Sidebar hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </div>
  )
}

export default Contact