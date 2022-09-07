import React from 'react';
import './index.css'

function percentageCircle({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode,percentage}) {
  return (
    <div style={toggleDarkMode?{backgroundColor:'rgb(47, 47, 47)',color:'#fff'}:{backgroundColor:'#eee'}} className={`c100 p${percentage} center`}>
    <span style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >{percentage}%</span>
    <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
    </div>
    <div style={toggleDarkMode?{backgroundColor:'#111'}:{backgroundColor:'rgb(244, 253, 255)'}} className="c200"></div>
</div>
  )
}

export default percentageCircle