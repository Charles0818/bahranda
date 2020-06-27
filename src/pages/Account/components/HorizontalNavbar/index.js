import React from 'react';
import {MdShoppingCart} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HorizontalNavbar = () => {
  return (
    <nav className="d-flex justify-content-s-between align-items-center padding-vertical-md margin-bottom-md slim-border-bottom">
      <div className="greet font-lg"><h2>Hello Temi,</h2></div>
      <div className="d-flex">
        <Link to="/" className="margin-right-md">
          <MdShoppingCart className="font-xlg" color="rgba(0, 0, 0, 0.36)" />
        </Link>
        <div><FaUserCircle className="font-xlg" color="rgba(0, 0, 0, 0.36)"/></div>
      </div>
    </nav>
  )
}

export default HorizontalNavbar;