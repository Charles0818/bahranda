import React from 'react';
import {MdHome} from 'react-icons/md';
import {FaUserCircle, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const HorizontalNavbar = ({ first_name, last_name, toggleSidebar }) => {
  return (
    <nav className="d-flex nowrap justify-content-s-between align-items-center padding-bottom-md margin-bottom-md slim-border-bottom">
      <div className="d-flex align-items-center">
        <button className="bar border-r-circle margin-right-md cursor-pointer"
          onClick={toggleSidebar}>
          <FaBars className="bar-icon" style={{fontSize: '20px'}} />
        </button>
        <h2 className="greet font-lg capitalize">Hello, {`${first_name} ${last_name}`}</h2>
      </div>
      <div className="d-flex align-items-center">
        <Link to="/" className="margin-right-md">
          <MdHome className="font-lg" color="rgba(0, 0, 0, 0.36)" />
        </Link>
        {/* <div><FaUserCircle className="font-lg" color="rgba(0, 0, 0, 0.36)"/></div> */}
      </div>
    </nav>
  )
};

const mapNameToProps = state => {
  const { first_name, last_name } = state.accountReducer.profile;
  return { first_name, last_name }
}

export default connect(mapNameToProps, null)(HorizontalNavbar);
