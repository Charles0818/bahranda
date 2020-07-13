import React, { forwardRef } from 'react';
import {MdShoppingCart} from 'react-icons/md';
import {FaUserCircle, FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HorizontalNavbar = forwardRef(({  }, ref) => {
  return (
    <nav className="d-flex nowrap justify-content-s-between align-items-center padding-bottom-md margin-bottom-md slim-border-bottom">
      <div className="d-flex align-items-center">
        <div className="bar padding-sm margin-right-md cursor-pointer"
          onClick={() => ref.current.classList.toggle('toggle')}>
          <FaBars className="font-lg " />
        </div>
        <h2 className="greet font-lg">Hello Temi,</h2>
      </div>
      <div className="d-flex align-items-center">
        {/* <Link to="/" className="margin-right-md">
          <MdShoppingCart className="font-lg" color="rgba(0, 0, 0, 0.36)" />
        </Link> */}
        <div><FaUserCircle className="font-lg" color="rgba(0, 0, 0, 0.36)"/></div>
      </div>
    </nav>
  )
})

export default HorizontalNavbar;