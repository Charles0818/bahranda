import React, { forwardRef } from 'react';
import {MdHome} from 'react-icons/md';
import {FaUserCircle, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const HorizontalNavbar = forwardRef(({ name }, ref) => {
  return (
    <nav className="d-flex nowrap justify-content-s-between align-items-center padding-bottom-md margin-bottom-md slim-border-bottom">
      <div className="d-flex align-items-center">
        <div className="bar padding-sm margin-right-md cursor-pointer"
          onClick={() => ref.current.classList.toggle('toggle')}>
          <FaBars className="font-lg " />
        </div>
        <h2 className="greet font-lg capitalize">Hello, {name}</h2>
      </div>
      <div className="d-flex align-items-center">
        <Link to="/" className="margin-right-md">
          <MdHome className="font-lg" color="rgba(0, 0, 0, 0.36)" />
        </Link>
        <div><FaUserCircle className="font-lg" color="rgba(0, 0, 0, 0.36)"/></div>
      </div>
    </nav>
  )
});

const mapNameToProps = state => {
  const { name } = state.accountReducer.profile;
  return { name }
}

export default connect(mapNameToProps, null)(HorizontalNavbar);
