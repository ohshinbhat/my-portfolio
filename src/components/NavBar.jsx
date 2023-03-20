import React from 'react'
import '../styles.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <div className='nav-container'>
            <div className='logo'>
                Ob&lt; /&gt;
            </div>
            <div className='links'>
                <Link to="/" relative="path" className='link-ele' >Home</Link>
                <Link to="/about" relative="path" className='link-ele' >About</Link>
                <Link to="/resume" relative="path" className='link-ele' >Resume</Link>
                <Link to="/gallery" relative="path" className='link-ele' >Gallery</Link>
                
            </div>

        </div>
    </div>
  )
}

export default NavBar;