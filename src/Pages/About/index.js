import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
import {Row,Col} from 'react-bootstrap'
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
      animationDelay: '0.3s',
      animationDuration: '0.5s',
      animationFillMode: 'forwards'});
      // console.log(e.currentTarget.scrollTop)
    }
    else{
      setAnimationSkillsSection({animation: 'none'});

    }
    if(e.currentTarget.scrollTop >= 700){
      setEducationSection({animation: 'fadeIn',
      animationDelay: '0.5s',
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
      <div style={toggleDarkMode?{background:"#252525"}:{background:'#ddd'}} className="partition"></div>
      <div className="skills-section" >
      {/* <div className="skills-section" style={animationSkillsSection?{animation:'fadeIn'}:{}}> */}
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >MY SKILLS</span>
        </h1>
        <div className="skills-loaders-section" style={animationSkillsSection}>
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
      <div style={toggleDarkMode?{background:"#252525"}:{background:'#ddd'}} className="partition"></div>
      <div className="education-section">
        <h1 className="inner-heading">
          <span style={toggleDarkMode?{color:'#fff',borderColor:'#666'}:{color:'#777',borderColor:'#eee'}} >EDUCATION & EXPERIENCE</span>
        </h1>
        <div className="education-cards-section" style={educationSection}>
          <Row>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2022 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>FULL STACK DEVELOPER -<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> CREDENCESOFT</span></h1>
            <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia praesentium repellendus? Quae?</p>
            <GiSuitcase size={25} />
            </Col>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2022 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>FULL STACK DEVELOPER -<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> CREDENCESOFT</span></h1>
            <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia praesentium repellendus? Quae?</p>
            <GiSuitcase size={25} />
            </Col>
          </Row>
          <Row>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2022 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>FULL STACK DEVELOPER -<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> CREDENCESOFT</span></h1>
            <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia praesentium repellendus? Quae?</p>
            <GiSuitcase size={25} />
            </Col>
            <Col>
            <span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777',background:'#eee'}}>2022 - PRESENT</span>
            <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>FULL STACK DEVELOPER -<span style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}> CREDENCESOFT</span></h1>
            <p style={toggleDarkMode?{color:'rgba(255, 255, 255, 0.815)'}:{color:'#777'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia praesentium repellendus? Quae?</p>
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