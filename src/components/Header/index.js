import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTwitter, FaFacebookF, FaInstagram, FaBars } from 'react-icons/fa';
import {MdLocationOn, MdPhoneIphone} from 'react-icons/md';
import logo from '../../assets/baranda.png';
import {RiSearchEyeLine} from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div className="before-nav d-flex justify-content-s-between bg-color1 color-white padding-horizontal-xlg padding-vertical-sm">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center address margin-right-md">
            <MdLocationOn color="#fff" className="font-lg margin-right-sm" style={{flex: .2}} />
            <p className="font-sm font-weight-500" style={{flex: .8}}>21 Ajasa Street, Onikan, Lagos</p>
          </div>
          <div className="d-flex align-items-center phone">
            <MdPhoneIphone color="#fff" className="font-lg" />
            <span className="font-sm">0706 245 3802</span>
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
      <NavBar />
    </header>
  )
}

const mapStateToProps = state => {
  const { authReducer } = state;
  return { isLoggedIn: authReducer.token && authReducer.isLoggedIn }
}
const NavBar = connect(mapStateToProps, null)(({ isLoggedIn }) => {
  const navRef = useRef(null);
  return (
    <nav className="d-flex align-items-center justify-content-s-between padding-horizontal-xlg padding-vertical-md bg-white">
      <Link to="/"><img src={logo} className="logo-md margin-right-md"/></Link>
      <div ref={navRef} className="d-flex nav-links toggle align-items-center justify-content-s-between">
        <NavLink exact  activeClassName="color1 font-weight-500" to="/" className="color-dark padding-md">Home</NavLink>
        <NavLink  activeClassName="color1 font-weight-500" to="/how-we-work" className="color-dark font-md padding-md">How we work</NavLink>
        <NavLink  activeClassName="color1 font-weight-500" to="/commodities" className="color-dark font-md padding-md">Commodities</NavLink>
        <NavLink  activeClassName="color1 font-weight-500" to="/contact" className="color-dark font-md padding-md">Contact Us</NavLink>
        {!isLoggedIn &&
        <div className="d-flex align-items-center justify-content-s-between auth-links">
          <NavLink activeClassName="color1" to="/auth/signin" className="color-dark font-md margin-right-sm padding-md">Sign in</NavLink>
          <NavLink to="/auth/register" className="ripple padding-horizontal-sm font-weight-600 bg-color1 border-r-5 color-white font-sm margin-right-md">Register</NavLink>
        </div>}
      </div>
      <FaBars className="font-md cursor-pointer bar color1" onClick={() => navRef.current.classList.toggle('toggle')} />
    </nav>
  )
})
export default Header;
