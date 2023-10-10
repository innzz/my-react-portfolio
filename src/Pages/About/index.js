import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
import {Row,Col} from 'react-bootstrap';
import resume from '../../assets/images/resume.pdf';
// import {IoMdArrowRoundForward} from 'react-icons/io';
import {RiDownload2Fill} from 'react-icons/ri';
import {TbArrowBigDownLines} from 'react-icons/tb';
import {GiSuitcase} from 'react-icons/gi';
import PercentageCircle from '../../Components/PercentageCircle'

function About({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  const [showScroll, setShowScroll] = useState(true);
  const [animationSkillsSection, setAnimationSkillsSection] = useState({animation: 'none'});
  const [educationSection, setEducationSection] = useState({animation: 'none'});
  setActive('About');
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
  const changeColor = (e)=>{
    if(e.currentTarget.scrollTop >= 100){
      setShowScroll(false);
    }
    else{
      setShowScroll(true);
    }
    if(e.currentTarget.scrollTop >= 30){
      setAnimationSkillsSection({animation: 'fadeInRight',
      animationDelay: '0.4s',
      animationDuration: '0.5s',
      animationFillMode: 'forwards'});
      // console.log(e.currentTarget.scrollTop)
    }
    else{
      setAnimationSkillsSection({animation: 'none'});

    }
    if(e.currentTarget.scrollTop >= 660){
      setEducationSection({animation: 'fadeIn',
      animationDelay: '0.4s',
      animationDuration: '0.5s',
      animationFillMode: 'forwards'});
      // console.log(e.currentTarget.scrollTop)
    }
    else{
      setEducationSection({animation: 'none'});

    }
    // console.log(animationSkillsSection)
    
  };
  return (
    <div onScroll={changeColor} className='secondary-body' style={toggleDarkMode?{background:'#111'}:{background:'rgb(244, 253, 255)'}}>
    <div className='about-page' >
      <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className='heading'>
        ABOUT <span>ME</span>
        <span style={toggleDarkMode?{color:'rgb(47, 47, 47)'}:{color:'rgba(30,37,48,.07)'}} className="secondary-heading">
          RESUME
        </span>
      </h1>
      <div className="personal-info-section">
        <div className="personal-infos">
          <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className="personal-infos-heading">
            PERSONAL INFOS
          </h1>
          <div className="personal-infos-inputs-section">
            <div className="left-personal-infos-inputs-section">
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >First Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Age:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > 20 Years</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Phone:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > 9137338941</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Address:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > India</span></span>
            </div>
            <div className="right-personal-infos-inputs-section">
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Last Name:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Pawaskar</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Email:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > inzamam.pawaskar10@gmail.com</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >Freelance:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Available</span></span>
              <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#666'}} >LinkedIn:<span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} > Inzamam Pawaskar</span></span>
            </div>
          </div>
        <div className="more-about-me-section">
        {/* file:///C:/Users/inzzz/inzamam%20pawaskar.pdf */}
              <a href={resume} target="_blank" rel='noreferrer'>
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>DOWNLOAD CV</span>
                <span></span>
                <span><RiDownload2Fill size={30} color={'white'}/></span>
              </div>
              </a>
            </div>
        </div>
        <div className="personal-infos-cards">
            <Row>
              <Col style={toggleDarkMode?{borderColor:'#b4edfe'}:{borderColor:'#eee'}}>
              <div className="card-content">
                <h1>2</h1>
                <p>YEARS OF <br />EXPERIENCE</p>
              </div>
              </Col>
              <Col style={toggleDarkMode?{borderColor:'#b4edfe'}:{borderColor:'#eee'}}>
              <div className="card-content">
                <h1>20</h1>
                <p>PROJECTS<br />COMPLETED</p>
              </div>
              </Col>
            </Row>
        </div>
      </div>
      <div style={toggleDarkMode?{background:"#252525"}:{background:'#ddd'}} className="partition"></div>
      <div className="skills-section" >
      {/* <div className="skills-section" style={animationSkillsSection?{animation:'fadeIn'}:{}}> */}
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >MY SKILLS</span>
        </h1>
        <div className="skills-loaders-section" style={animationSkillsSection}>
          <Row>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={79} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >HTML</h6>
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={80} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >CSS</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={85} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >JAVASCRIPT</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={83} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >REACT JS</h6> 
            </Col>
          </Row>
          <Row>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={78} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >NEXT JS</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={77} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >NODE JS</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={74} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >Express JS</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={75} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >Git</h6> 
            </Col>
          </Row>
          <Row> 
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={72} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >GitHub</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={90} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >Bootstrap</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={77} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >Ionic</h6> 
            </Col>
            <Col>
                <PercentageCircle hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} percentage={55} />
                <h6 style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >Firebase</h6> 
            </Col>
          </Row>
        </div>
      </div>
      <div style={toggleDarkMode?{background:"#252525"}:{background:'#ddd'}} className="partition"></div>
      <div className="education-section">
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >EDUCATION & EXPERIENCE</span>
        </h1>
        <div className="education-cards-section" style={educationSection}>
          <Row>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2021 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>BCA (Bachelor of Computer Application)-<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>HINDUJA COLLEGE</span></h1>
            {/* <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> */}
              <ul style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>
              <li>Contributed in Open source Projects.</li>
              <li>Organized an Event to help other students to learn Web Development.</li>
              </ul>
            {/* </p> */}
            <GiSuitcase size={25} />
            </Col>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2022 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>FULL STACK DEVELOPER Intern -<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> CREDENCESOFT Pvt. Ltd</span></h1>
            {/* <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> */}
              <ul style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>
              <li>Designed and Developed 10+ front-end and back-end applications utilizing ReactJS,
              NextJS, NodeJS and ExpressJS.
              </li>
              <li>
              Developed front-end website architecture which includes designing interactive,
              responsive, and dynamic web pages.
              </li>
              <li>
              Wrote structured, tested, readable and maintainable code.
              </li>
              <li>
              Collaborate with other developers to update the website and create new features.
              </li>
              </ul>
            {/* </p> */}
            <GiSuitcase size={25} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
      <Sidebar hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
      {windowSize.innerWidth >= 1400 ? <div>{showScroll?<span style={toggleDarkMode?{color:'#eee'}:{color:'#666'}} className="scroll-down-arrow">
        <h6>SCROLL</h6>
        <TbArrowBigDownLines size={30}/>
      </span>:''}</div>:''}
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </div>
  )
}

export default About