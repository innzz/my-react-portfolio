import './index.css';
// import {IoMdArrowRoundForward} from 'react-icons/io';
// import Sidebar from '../Sidebar';
import backgroundImage from '../../assets/images/bg.svg'
import lightBackgroundImage from '../../assets/images/lightbg1.svg'
import HomeContent from '../../Components/HomeContent';

function Home({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {

  return (
    <>
    <div className="Home">
      <HomeContent hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode}/>
      {/* <div className="home-container">
        <div className="left-profile-section">
          <div className="profile-pic">
            <img src="propic.jpeg" alt="" />
          </div>
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
              <div className="more-about-me-button">
                <span style={toggleDarkMode?{color:'#fff'}:{color:'#666'}}>MORE ABOUT ME</span>
                <span></span>
                <span><IoMdArrowRoundForward size={30}/></span>
              </div>
            </div>
          </div>
        </div>
        <Sidebar toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} active={active} hover={hover} setActive={setActive} setHover={setHover}/>
      </div> */}
        {toggleDarkMode ? <img className='background-image' src={backgroundImage} alt="background" />:<img className='background-image' src={lightBackgroundImage} alt="background" />}
    </div>
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </>
  );
}

export default Home;
