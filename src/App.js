import React from "react";
import {Route,Routes} from 'react-router-dom'
import { useState } from 'react';
// import HomeContent from "./Components/HomeContent";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [hover, setHover] = useState('');
  const [active, setActive] = useState('Home');
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />} />
        <Route path="/about" element={<About hover={hover} setHover={setHover} active={active} setActive={setActive} toggleDarkMode={toggleDarkMode} setToggleDarkMode={setToggleDarkMode} />} />
    </Routes>
  );
}

export default App;
