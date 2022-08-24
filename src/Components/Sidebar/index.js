import React from 'react';
import './index.css';
import {BiSun} from 'react-icons/bi';
import {GoProject} from 'react-icons/go';
import {BsFillChatSquareDotsFill} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import {RiContactsLine} from 'react-icons/ri';
import {FaMoon} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Sidebar({toggleDarkMode,setToggleDarkMode,active,hover,setActive,setHover}) {
  return (
    <div className="sidebar">
          <span className="dark-mode-icon">
            {toggleDarkMode?<BiSun size={25} style={toggleDarkMode?{background:'gray',color:'#fff'}:{background:'#eee',color:'#666'}} onClick={()=>setToggleDarkMode(!toggleDarkMode)} />:<FaMoon style={toggleDarkMode?{background:'gray'}:{background:'#eee',color:'#666'}}  size={25} onClick={()=>setToggleDarkMode(!toggleDarkMode)} />}
          </span>
          <div className="group-icons">
            <Link to='/'><span onMouseLeave={()=>setHover('')}><span>Home</span><AiFillHome style={hover==='Home'?{background: '#71DDFF'}:active==='Home'?{background: '#71DDFF'}:toggleDarkMode?{background:'gray'}:{background:'#eee',color:'#666'}} onClick={()=>setActive('Home')} onMouseOver={()=>setHover('Home')} size={20}/></span></Link>
            <Link to='/about'><span onMouseLeave={()=>setHover('')}><span>About</span><RiContactsLine style={hover==='About'?{background: '#71DDFF'}:active==='About'?{background: '#71DDFF'}:toggleDarkMode?{background:'gray'}:{background:'#eee',color:'#666'}} onClick={()=>setActive('About')} onMouseOver={()=>setHover('About')}  size={20}/></span></Link>
            <Link to='/contact'><span onMouseLeave={()=>setHover('')}><span>Contact</span><BsFillChatSquareDotsFill style={hover==='Contact'?{background: '#71DDFF'}:active==='Contact'?{background: '#71DDFF'}:toggleDarkMode?{background:'gray'}:{background:'#eee',color:'#666'}} onClick={()=>setActive('Contact')} onMouseOver={()=>setHover('Contact')}  size={20}/></span></Link>
            <Link to='/projects'><span onMouseLeave={()=>setHover('')}><span>Projects</span><GoProject style={hover==='Projects'?{background: '#71DDFF'}:active==='Projects'?{background: '#71DDFF'}:toggleDarkMode?{background:'gray'}:{background:'#eee',color:'#666'}} onClick={()=>setActive('Projects')} onMouseOver={()=>setHover('Projects')}  size={20}/></span></Link>
          </div>
        </div>
  ) 
}

export default Sidebar