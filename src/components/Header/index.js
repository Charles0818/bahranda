import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaBars } from 'react-icons/fa';
import {MdLocationOn, MdPhoneIphone} from 'react-icons/md';
import logo from '../../assets/baranda.png';
import {RiSearchEyeLine} from 'react-icons/ri'

const Header = () => {
  const navRef = useRef();
  return (
    <header>
      <div className="before-nav d-flex justify-content-s-between bg-color1 color-white padding-horizontal-xlg padding-vertical-sm">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center address margin-right-md">
            <MdLocationOn color="#fff" className="font-lg margin-right-sm" style={{flex: .2}} />
            <p className="font-sm font-weight-500" style={{flex: .8}}>71, Solo Makinda close, Amebo avenue Ikotun</p>
          </div>
          <div className="d-flex align-items-center phone">
            <MdPhoneIphone color="#fff" className="font-lg" />
            <span className="font-sm">+234 80 345 67890</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Link className="margin-right-md font-md" color="#fff" to="/about"><FaTwitter color="#fff" /></Link> 
          <Link className="margin-right-md font-md" color="#fff" to="/about"><FaInstagram  color="#fff" /></Link>
          <Link className="margin-right-md font-md" color="#fff" to="/about"><FaFacebookF color="#fff" /></Link>
        </div>
        <div className="search-icon border-r-circle">
          <RiSearchEyeLine color="#fff" className="font-md"/>
        </div>
      </div>
      <nav className="d-flex align-items-center justify-content-s-between padding-horizontal-xlg padding-vertical-md bg-white">
        <img src={logo} className="logo-md margin-right-md"/>
        <div ref={navRef} className="d-flex nav-links toggle align-items-center justify-content-s-between">
          <NavLink  activeClassName="color1 font-weight-500" to="/" className="color-dark padding-md">Home</NavLink>
          <NavLink  activeClassName="color1 font-weight-500" to="/home" className="color-dark font-md padding-md">How we work</NavLink>
          <NavLink  activeClassName="color1 font-weight-500" to="/home" className="color-dark font-md padding-md">Products</NavLink>
          <NavLink  activeClassName="color1 font-weight-500" to="/home" className="color-dark font-md padding-md">Contact Us</NavLink>
          <div className="d-flex align-items-center justify-content-s-between auth-links">
            <NavLink to="/auth/signin" className="color-dark font-md margin-right-sm padding-md">Sign in</NavLink>
            <NavLink to="/auth/register" className="ripple padding-horizontal-sm font-weight-600 bg-color1 border-r-5 color-white font-sm margin-right-md">Register</NavLink>
          </div>
        </div>
        
        <FaBars className="font-md cursor-pointer bar color1" onClick={() => navRef.current.classList.toggle('toggle')} />
      </nav>
    </header>
  )
}

export default Header;
