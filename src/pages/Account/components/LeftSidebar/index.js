import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt, FaWindows, FaStore, FaTimes } from 'react-icons/fa';
import { MdAccountCircle, MdAccountBalanceWallet } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
const LeftSidebar = forwardRef(({sidebarRef}) => {
  return (
    <aside ref={sidebarRef} className="sidebar bg-color1 padding-horizontal-sm padding-vertical-lg">
      <h3 className="text-center store font-lg color-white">Store</h3>
      <div className="d-flex justify-content-end margin-bottom-lg">
        <FaTimes className="color-white font-lg margin-right-sm times cursor-pointer"
        onClick={() => sidebarRef.current.classList.remove('toggle')}
      />
      </div>
      <SidebarItem link="/account" icon={FaWindows} text='dashboard' exact={true} />
      <SidebarItem link="/products" icon={FaStore} text="products" />
      {/* <SidebarItem link="/account/investments" icon={MdAccountCircle} text='investments' /> */}
      <SidebarItem link="/account/wallet" icon={MdAccountBalanceWallet} text='wallet' />
      <SidebarItem link="/account/settings" icon={FiSettings} text='settings' />
      <Logout />
    </aside>
  )
})

const SidebarItem = ({ icon: Icon, text, link, ...rest }) => {
  return (
    <li><NavLink {...rest} to={link} activeClassName="active" className="d-flex align-items-center color-white sidebar-item padding-vertical-xsm margin-bottom-sm padding-horizontal-sm">
      <Icon className="icon margin-right-sm" />
      <span className="font-md capitalize font-weight-500 font-style-normal">{text}</span>
    </NavLink></li>
  )
}

const Logout = () => {
  return (
    <li className="d-flex align-items-center color-white sidebar-item padding-vertical-xsm padding-horizontal-sm">
      <FaSignOutAlt className="margin-right-sm font-md" />
      <span className="font-md">Log out</span>
    </li>
  )
}
export default LeftSidebar;