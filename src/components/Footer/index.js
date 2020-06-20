import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import deliveryTruck from '../../assets/delivery-truck.png';
import logo from '../../assets/baranda.png'
const Footer = () => {
  return (
    <div>
      <section className="dealer padding-horizontal-xlg padding-vertical-lg bg-color1">
        <div className="dealer-btn margin-bottom-md">
          <h3 className="color-white font-xlg margin-bottom-md">Become a Dealer</h3>
          <button className="btn bg-white color1 font-sm">Get started</button>
        </div>
        <img className="truck" src={deliveryTruck} alt="Bahranda van" />
      </section>
      <footer className="padding-horizontal-xlg padding-vertical-lg bg-dark">
        <img src={logo} alt="Bahranda logo" className="margin-bottom-md logo-lg" />
        <div className="footer-links">
          <div className="footer-link">
            <h4 className="color-white title">Company</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/about">About us</Link>
              <Link className="font-sm color-white" to="/reviews">Reviews</Link>
              <Link className="font-sm color-white" to="/products">Store</Link>
              <Link className="font-sm color-white" to="/faq">Frequently asked questions</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Product</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/about">Trending</Link>
              <Link className="font-sm color-white" to="/reviews">Features</Link>
              <Link className="font-sm color-white" to="/products">Pricing</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Resources</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/help">Help</Link>
              <Link className="font-sm color-white" to="/privacy-policy">Privacy and policy</Link>
              <Link className="font-sm color-white" to="/terms">Terms and conditions</Link>
              <Link className="font-sm color-white" to="/vacancy">Vacancy</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Get in touch</h4>
            <div className="d-flex column">
              <span className="font-sm color-white">+234 60 345 67890</span>
              <span className="font-sm color-white">@enquiries@bahranda.com</span>
              <span className="font-sm color-white">71, Solo Makinde close, Amebo avenue, Ikotun</span>
              <div className="d-flex align-items-center">
                <FaTwitter color="#fff" className="bg-color1-opacity border-r-circle round-icon font-sm margin-right-sm" />
                <FaInstagram color="#fff" className="bg-color1-opacity border-r-circle round-icon font-sm margin-right-sm" />
                <FaFacebookF color="#fff" className="bg-color1-opacity border-r-circle round-icon font-sm margin-right-sm" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;