import React, { forwardRef, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaSignOutAlt, FaWindows, FaStore, FaTimes } from 'react-icons/fa';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { Modal } from '../../../components';
import { actions  } from '../../../../helpers';

const { authActions: { signOut } } = actions;
const { useConfirmation } = Modal;
const LeftSidebar = forwardRef(({}, ref) => {
  useEffect(() => {
    const event = window.addEventListener('click', e => {
      if(ref.current) {
        if(e.target.classList.contains('sidebar') || e.target.classList.contains('bar')) return;
        ref.current.classList.remove('toggle')
      }
    });
    // return () => window.removeEventListener(event);
  }, [])
  return (
    <aside ref={ref} className="sidebar bg-color1 padding-horizontal-sm padding-vertical-lg">
      <h3 className="text-center store font-lg color-white">Store</h3>
      <div className="d-flex justify-content-end margin-bottom-lg">
        <FaTimes className="color-white font-lg margin-right-sm times cursor-pointer"
        onClick={() => ref.current.classList.remove('toggle')}
      />
      </div>
      <SidebarItem link="/account" icon={FaWindows} text='dashboard' exact={true} />
      <SidebarItem link="/commodities" icon={FaStore} text="commodities" />
      {/* <SidebarItem link="/account/investments" icon={MdAccountCircle} text='investments' /> */}
      <SidebarItem link="/account/wallet" icon={MdAccountBalanceWallet} text='wallet' />
      <SidebarItem link="/account/investments" icon={MdAccountBalanceWallet} text='investments' />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signOut }, dispatch)
const Logout = connect(null, mapDispatchToProps)(({ signOut }) => {
  const { ConfirmationChild, openModal } = useConfirmation();
  return (
    <Fragment>
      <li onClick={openModal} className="d-flex align-items-center color-white sidebar-item padding-vertical-xsm padding-horizontal-sm cursor-pointer">
        <FaSignOutAlt className="margin-right-sm font-md" />
        <span className="font-md">Log out</span>
      </li>
      <ConfirmationChild action={signOut} heading={"Log out"}>
        <p>Are you sure you want to logout ?</p>
      </ConfirmationChild>
    </Fragment>
  )
})
export default LeftSidebar;
