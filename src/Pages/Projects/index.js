import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
import {ProjectsArray} from '../../assets/ProjectsArray/ProjectsArray';

function Projects ({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  setActive('Projects');
  const [showClickMe, setShowClickMe] = useState(false);
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
  
  const clickMeFunction = ()=>{
    if (windowSize.innerWidth <= 700) {
      setShowClickMe(true);
    }
    else{
      setShowClickMe(false);
    }
  }



  return (
    <div className='secondary-body' style={toggleDarkMode?{background:'#111'}:{background:'rgb(244, 253, 255)'}}>
    <div className='projects-page' onLoad={clickMeFunction}>
      <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className='heading'>
        MY <span>PROJECTS</span>
        <h1 style={toggleDarkMode?{color:'rgb(47, 47, 47)'}:{color:'rgba(30,37,48,.07)'}} className="secondary-heading">
          WORKS
        </h1>
      </h1>
      <div className="projects-cards-section">
        {ProjectsArray.map((val,i)=>{
          return (
            <div key={i} className="projects-cards-row">
          {val.row.map((val2,j)=>{
            return (
              <div key={j} className="projects-card-col">
            <div className="projects-card" onMouseOver={()=>setShowClickMe(false)}>
              <img src={val2.image} alt="" />
              <div className="projects-card-content" style={toggleDarkMode?{background:"rgb(47, 47, 47)",color:"#fff"}:{background:"#f3f3f3",color:"#666"}}>
                <h1>{val2.name}</h1>
                <p>Technolgy Used: {val2.techs}</p>
                <a href={val2.link} target="_blank"><button>VIEW</button></a>
                {showClickMe? <p style={toggleDarkMode?{color:"#fff"}:{color:"#666"}}>CLICK ME!</p>:''}
              </div>
            </div>
          </div>
            )
          })}
        </div>
          )
        })}
      </div>
    </div>
      <Sidebar hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </div>
  )
}

export default Projects