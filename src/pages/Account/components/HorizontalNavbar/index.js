import React from 'react';
import {MdShoppingCart} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const HorizontalNavbar = () => {
  return (
    <section>
    <nav className="d-flex justify-content-s-between padding-vertical-md margin-horizontal-xlg">
    <div className="greet font-xlg"><h2>Hello Temi,</h2></div>
  <div className="shopping-cart">
    <NavLink to="/" >
    <MdShoppingCart className="font-xlg" color="rgba(0, 0, 0, 0.36)" />
    </NavLink>
    </div>
  <div className="user-avatar margin-left-md margin-right-md"><FaUserCircle className="font-xlg" color="rgba(0, 0, 0, 0.36)"/></div>
<div className=""></div>
</nav>
<div className="slim-border-bottom margin-horizontal-xlg"></div>
</section>
  )
}

export default HorizontalNavbar;