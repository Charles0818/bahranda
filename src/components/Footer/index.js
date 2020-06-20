import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import deliveryTruck from '../../assets/delivery-truck.png';
import logo from '../../assets/baranda.png'
const Footer = () => {
  return (
    <div>
      <section className="d-flex align-items-center justify-content-between padding-horizontal-lg bg-color1">
        <div className="">
          <h3 className="color-white font-lg margin-bottom-md">Become a Dealer</h3>
          <button className="btn bg-white color1 font-sm">Get started</button>
        </div>
        <img src={deliveryTruck} alt="Bahranda van" />
      </section>
      <footer className="padding-horizontal-xlg padding-vertical-lg bg-dark">
        <img src={logo} alt="Bahranda logo" className="margin-bottom-md" />
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
            <h4 className="color-white title">Company</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/about">About us</Link>
              <Link className="font-sm color-white" to="/reviews">Reviews</Link>
              <Link className="font-sm color-white" to="/products">Store</Link>
              <Link className="font-sm color-white" to="/faq">Frequently asked questions</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Get in touch</h4>
            <div className="d-flex column">
              <span className="font-sm color-white">+234 60 345 67890</span>
              <span className="font-sm color-white">@enquiries@bahranda.com</span>
              <span className="font-sm color-white">71, Solo Makinde close, Amebo avenue, Ikotun</span>
              <div className="d-flex align-items-center">
                <FaFacebook className="color-white bg-color1-opacity border-r-circle padding-md font-sm margin-right-sm" />
                <FaInstagram className="color-white bg-color1-opacity border-r-circle padding-md font-sm margin-right-sm" />
                <FaFacebook className="color-white bg-color1-opacity border-r-circle padding-md font-sm margin-right-sm" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;