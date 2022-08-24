import React from 'react';
import Sidebar from '../Sidebar';
import {IoMdArrowRoundForward} from 'react-icons/io';
import './index.css'

function HomeContent({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  return (
    <div className="home-container">
        <div className="left-profile-section">
          <div className="profile-pic">
            <img src="propic.jpeg" alt="" />
          </div>
        </div>
        <div className='right-content-section'>
          <div className="content">
            <div className="content-heading">
              <h1>I'M INZAMAM PAWASKAR.</h1>
              <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>WEB DEVELOPER</h1>
            </div>
            <p style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>
            I'm a India based web developer & MERN stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </p>
            <div className="more-about-me-section">
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>MORE ABOUT ME</span>
                <span></span>
                <span><IoMdArrowRoundForward size={30}/></span>
              </div>
            </div>
          </div>
        </div>
        <Sidebar toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} active={active} hover={hover} setActive={setActive} setHover={setHover}/>
      </div>
  )
}

export default HomeContent