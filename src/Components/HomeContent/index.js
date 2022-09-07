import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { Link } from 'react-router-dom';
import './index.css'

function HomeContent({moreAboutMe, setMoreAboutMe,hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <>
    <div className="home-container">
        <div className="left-profile-section">
          {windowSize.innerWidth <= 1150 ? <div style={toggleDarkMode?{border: "5px solid #252525"}:{border:"5px solid #eee"}} className="profile-pic">
            <img src="propic.jpeg" alt="" />
          </div>:<div className="profile-pic">
            <img src="propic.jpeg" alt="" />
          </div>}
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
              <Link to="/about">
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>MORE ABOUT ME</span>
                <span></span>
                <span><IoMdArrowRoundForward color='#fff' size={30}/></span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        <Sidebar toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} active={active} hover={hover} setActive={setActive} setHover={setHover}/>
    </>
  )
}

export default HomeContent