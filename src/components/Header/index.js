import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import logo from '../../assets/baranda.png';
import {RiSearchEyeLine} from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="Before-Nav">
        <div>
          <MdLocationOn color="#fff" fontSize="3rem"></MdLocationOn>
          <p>71, Solo Makinda close, Amebo <br/> avenue Ikotun</p>
        </div>
        <hr/>
        <div>
          <MdPhoneIphone color="#fff" fontSize="40px"/>
          <p>+234 80 345 67890</p>
        </div>
        <div>
          <Link className="socials" color="#fff" to="/about"><FaTwitter color="#fff" fontSize="32px" /></Link> 
          <Link className="socials" color="#fff" to="/about"><FaInstagram  color="#fff" fontSize="32px" /></Link>
          <Link className="socials" color="#fff" to="/about"><FaFacebookF color="#fff" fontSize="32px" /></Link>
        </div>
  <div className="search-icon">
    <RiSearchEyeLine color="#fff" fontSize="2rem"  className="searchme"/>
    </div>
      </div>

      
      <nav>
       <img src={logo}/>
      <div><NavLink color="#069801" to="/home" className="current home nav-link">Home</NavLink></div>
      <div><NavLink color="#069801" to="/home" className="nav-link">How we work</NavLink></div>
      <div><NavLink color="#069801" to="/home" className="nav-link">Products</NavLink></div>
      <div><NavLink color="#069801" to="/home" className="nav-link">Contact Us</NavLink></div>
      <div><NavLink color="black" to="/home" fontSize="18px" className="sign-in nav-link">Sign in</NavLink></div>
      <div><button className="btn btn-color">Register</button></div>
  </nav>
    </header>
  )
}

export default Header;
