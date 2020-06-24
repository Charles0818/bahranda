import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaWindows, FaStore } from 'react-icons/fa';
import { MdAccountCircle, MdAccountBalanceWallet } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
const LeftSidebar = () => {
  return (
    <aside className="sidebar bg-color1 padding-horizontal-sm padding-vertical-lg">
      <h3 className="text-center font-lg color-white margin-bottom-lg">Store</h3>
      <SidebarItem icon={FaWindows} text='dashboard' />
      <SidebarItem icon={FaStore} text="products" />
      <SidebarItem icon={MdAccountCircle} text='account' />
      <SidebarItem icon={MdAccountBalanceWallet} text='wallet' />
      <SidebarItem icon={FiSettings} text='settings' />
      <Logout />
    </aside>
  )
}

const SidebarItem = ({ icon: Icon, text, link }) => {
  return (
    <li><Link to={link} className="d-flex align-items-center color-white sidebar-item padding-vertical-xsm margin-bottom-xsm padding-horizontal-sm">
      <Icon className="icon margin-right-sm" />
      <span className="font-md capitalize font-weight-500 font-style-normal">{text}</span>
    </Link></li>
  )
}

const Logout = () => {
  return (
    <li className="d-flex align-items-center color-white sidebar-item padding-vertical-sm padding-horizontal-sm">
      <FaSignOutAlt className="margin-right-sm font-md" />
      <span className="font-md">Log out</span>
    </li>
  )
}
export default LeftSidebar;