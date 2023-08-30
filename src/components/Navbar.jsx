import { Link, NavLink } from 'react-router-dom'

import {links} from '../data'
import { useState } from 'react'

import './navbar.css'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'
import Logo from '../images/logo.png'

import React from 'react'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='logo'>
                <img src={Logo} alt='Nav Logo'/>
            </Link>
            <ul className ={`nav_links ${isNavShowing ? 'show__Nav': 'hide__Nav'}`}>
                {
                    links.map(({name ,path},index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav': ''}>
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBars/>
                }
            </button>
        </div>
    </nav>
    )
}

export default Navbar