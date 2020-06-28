import React from 'react';
import {MdShoppingCart} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HorizontalNavbar = () => {
  return (
    <nav className="d-flex nowrap justify-content-s-between align-items-center padding-bottom-md margin-bottom-md slim-border-bottom">
      <h2 className="greet font-lg">Hello Temi,</h2>
      <div className="d-flex align-items-center">
        <Link to="/" className="margin-right-md">
          <MdShoppingCart className="font-lg" color="rgba(0, 0, 0, 0.36)" />
        </Link>
        <div><FaUserCircle className="font-lg" color="rgba(0, 0, 0, 0.36)"/></div>
      </div>
    </nav>
  )
}

export default HorizontalNavbar;