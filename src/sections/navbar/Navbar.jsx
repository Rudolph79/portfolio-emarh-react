import React from 'react';
import './navbar.css';
import logo from '../../assets/harry.jpg';
import data from './data';
import {IoIosColorPalette} from 'react-icons/io';

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <a href='index.html'>
                <img src={logo} alt="Logo" className='nav__logo' />
            </a>
            <ul className="nav__menu">
                {
                    data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
                }
            </ul>
            <button id='theme__icon'>
                <IoIosColorPalette />
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
