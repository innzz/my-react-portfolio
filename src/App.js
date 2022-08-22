import './App.css';
import {MdDarkMode} from 'react-icons/md';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {BiSun} from 'react-icons/bi';
import {AiFillHome} from 'react-icons/ai';
import {RiContactsFill} from 'react-icons/ri';
import {GrProjects,GrContact} from 'react-icons/gr';
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
              <h1>WEB DEVELOPER</h1>
            </div>
            <p>
            I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </p>
            <div className="more-about-me-section">
              <div className="more-about-me-button">
                <span>MORE ABOUT ME</span>
                <span></span>
                <IoMdArrowRoundForward size={30}/>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <span className="dark-mode-icon">
            <BiSun size={25}/>
          </span>
          <div className="group-icons">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>Projects</span>
             {/* <span><AiFillHome size={25}/><span>HOME</span></span>
            <span><RiContactsFill size={25}/></span>
            <span><GrProjects size={25}/></span>
            <span><GrContact size={25}/></span> */}
          </div>
        </div>
        <img className='background-image' src="bg.svg" alt="background" />
      </div>
    </div>
  );
}

export default App;
