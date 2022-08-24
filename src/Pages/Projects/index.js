import React from 'react'
import Sidebar from '../../Components/Sidebar'
import './index.css';
// import {Row,Col} from 'react-bootstrap'
// import {IoMdArrowRoundForward} from 'react-icons/io';
// import {RiDownload2Fill} from 'react-icons/ri';
// import {GiSuitcase} from 'react-icons/gi';
// import PercentageCircle from '../../Components/PercentageCircle'

function Projects ({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {
  setActive('Projects')
  return (
    <div className='secondary-body' style={toggleDarkMode?{background:'#111'}:{background:'rgb(244, 253, 255)'}}>
    <div className='projects-page' >
      <h1 style={toggleDarkMode?{color:'#fff'}:{color:'#666'}} className='heading'>
        MY <span>PROJECTS</span>
        <h1 style={toggleDarkMode?{color:'rgb(47, 47, 47)'}:{color:'rgba(30,37,48,.07)'}} className="secondary-heading">
          WORKS
        </h1>
      </h1>
    </div>
      <Sidebar hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </div>
  )
}

export default Projects