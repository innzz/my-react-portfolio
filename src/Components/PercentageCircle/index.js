import React from 'react';
import './index.css'

function percentageCircle({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode,percentage}) {
  return (
    <div style={toggleDarkMode?{backgroundColor:'rgb(47, 47, 47)',color:'#fff'}:{backgroundColor:'#eee'}} class={`c100 p${percentage} center`}>
    <span style={toggleDarkMode?{color:'#fff'}:{color:'#777'}} >{percentage}%</span>
    <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
    </div>
    <div style={toggleDarkMode?{backgroundColor:'#111'}:{backgroundColor:'rgb(244, 253, 255)'}} className="c200"></div>
</div>
  )
}

export default percentageCircle