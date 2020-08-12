import React, { useRef } from 'react';
import {MdHome} from 'react-icons/md';
import {FaUserCircle, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const HorizontalNavbar = ({ first_name, last_name, toggleSidebar }) => {
  // const navRef = useRef(null);
  return (
    <nav className="d-flex nowrap justify-content-s-between align-items-center padding-bottom-md margin-vertical-md slim-border-bottom" style={{width: '100%'}}>
      <div className="d-flex align-items-center">
        <button className="bar border-r-circle margin-right-md cursor-pointer"
          onClick={toggleSidebar}>
          <FaBars className="bar-icon" style={{fontSize: '20px'}} />
        </button>
        <h2 className="greet font-lg capitalize">Hello, {`${first_name} ${last_name}`}</h2>
      </div>
      {/* <div ref={navRef} className="d-flex align-items-center justify-content-s-between nav-links toggle"> */}
        {/* <Link to="/how-we-work" className="color-dark font-md padding-md">About Us</Link>
        <Link className="color-dark font-md padding-md" to="/contact">Contact Us</Link>
        <Link className="color-dark font-md padding-md" to="/privacy-policy">Privacy Policy</Link>
        <Link className="color-dark font-md padding-md" to="/terms">Terms and conditions</Link> */}
        
        {/* <Link to="/" className="margin-right-md">
          <MdHome className="font-lg" color="rgba(0, 0, 0, 0.36)" />
        </Link> */}
        {/* <div><FaUserCircle className="font-lg" color="rgba(0, 0, 0, 0.36)"/></div> */}
      {/* </div> */}
      {/* <FaBars className="font-md cursor-pointer bar color1" onClick={() => navRef.current.classList.toggle('toggle')} /> */}
    </nav>
  )
};

const mapNameToProps = state => {
  const { first_name, last_name } = state.accountReducer.profile;
  return { first_name, last_name }
}

export default connect(mapNameToProps, null)(HorizontalNavbar);
