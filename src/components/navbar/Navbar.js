import React, { useState } from 'react'

import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill className='logo'/>Irem</span>Emlak</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href='#home'>Home</a></li>
                <li><a href='#topcases'>Top Cases</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click 
                ? <FaRegTimesCircle className='icon' /> 
                : <HiOutlineMenuAlt4 className='icon'/>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar