import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Resume from './components/Resume'
import Gallery from './components/Gallery'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/resume' element = {<Resume />} />
        <Route path='/gallery' element = {<Gallery />} />
      </Routes>

    </div>
  )
}

export default App;