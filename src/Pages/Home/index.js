import './index.css';
import HomeContent from '../../Components/HomeContent';

function Home({hover,active,setActive,setHover,toggleDarkMode,setToggleDarkMode}) {

  return (
    <>
    <div className="Home">
      <HomeContent hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode}/>
        <div style={toggleDarkMode?{background:"rgb(17, 17, 17)"}:{background:"rgb(244, 253, 255)"}} className='background-image'>
          <div></div>
        </div>
    </div>
    <div style={toggleDarkMode?{background:'#252525'}:{background:'#d1f0fa'}} className="loading-screen"></div>
    </>
  );
}

export default Home;