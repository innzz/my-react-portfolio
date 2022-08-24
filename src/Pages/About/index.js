import React from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
import {Row,Col} from 'react-bootstrap'
import {IoMdArrowRoundForward} from 'react-icons/io';
import {RiDownload2Fill} from 'react-icons/ri';
import PercentageCircle from '../../Components/PercentageCircle'

function About({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  setActive('About')
  return (
    <div className='secondary-body' style={toggleDarkMode?{background:'#111'}:{background:'rgb(244, 253, 255)'}}>
    <div className='about-page' >
      <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className='heading'>
        ABOUT <span>ME</span>
        <h1 style={toggleDarkMode?{color:'rgb(47, 47, 47)'}:{color:'rgba(30,37,48,.07)'}} className="secondary-heading">
          RESUME
        </h1>
      </h1>
      <div className="personal-info-section">
        <div className="personal-infos">
          <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className="personal-infos-heading">
            PERSONAL INFOS
          </h1>
          <div className="personal-infos-inputs-section">
            <div className="left-personal-infos-inputs-section">
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
            </div>
            <div className="right-personal-infos-inputs-section">
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
            </div>
          </div>
        <div className="more-about-me-section">
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>DOWNLOAD CV</span>
                <span></span>
                <span><RiDownload2Fill size={30} color={'white'}/></span>
              </div>
            </div>
        </div>
        <div className="personal-infos-cards">
            <Row>
              <Col style={toggleDarkMode?{borderColor:'#b4edfe'}:{borderColor:'#eee'}}>
              <div className="card-content">
                <h1>5</h1>
                <p>MONTHS OF <br />EXPERIENCE</p>
              </div>
              </Col>
              <Col style={toggleDarkMode?{borderColor:'#b4edfe'}:{borderColor:'#eee'}}>
              <div className="card-content">
                <h1>15</h1>
                <p>PROJECTS<br />COMPLETED</p>
              </div>
              </Col>
            </Row>
        </div>
      </div>
      <div className="skills-section">
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >MY SKILLS</span>
        </h1>
        <div className="skills-loaders-section">
          <Row>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6>
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
          </Row>
          <Row>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={50} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6> 
            </Col>
          </Row>
        </div>
      </div>
      <div className="education-section">
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >EDUCATION & EXPERIENCE</span>
        </h1>
      </div>
    </div>
      <Sidebar hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </div>
  )
}

export default About