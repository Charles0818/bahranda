import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useFormInput } from '../Form';
import deliveryTruck from '../../assets/delivery-truck.png';
import logo from '../../assets/baranda.png';
const Footer = () => {
  return (
    <div>
      <section className="dealer padding-horizontal-xlg padding-vertical-lg bg-color1">
        <div className="dealer-btn margin-bottom-md">
          <h3 className="color-white font-xlg margin-bottom-md">Become a Dealer</h3>
          <button className="btn bg-white font-weight-600 color1 font-sm">Get started</button>
        </div>
        <img className="truck" src={deliveryTruck} alt="Bahranda van" />
      </section>
      <footer className="padding-horizontal-xlg padding-vertical-lg bg-dark">
        <div className="d-flex justify-content-s-between">
          <img src={logo} alt="Bahranda logo" className="margin-bottom-md logo-lg" />
          <NewsLetter />
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <h4 className="color-white title">Company</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/how-we-work">About us</Link>
              <Link className="font-sm color-white" to="/reviews">Reviews</Link>
              <Link className="font-sm color-white" to="/commodities">Store</Link>
              <Link className="font-sm color-white" to="/faqs">Frequently asked questions</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Commodity</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/about">Trending</Link>
              <Link className="font-sm color-white" to="/reviews">Features</Link>
              <Link className="font-sm color-white" to="/commodities">Pricing</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Resources</h4>
            <div className="d-flex column">
              <Link className="font-sm color-white" to="/contact">Help</Link>
              <Link className="font-sm color-white" to="/privacy-policy">Privacy and policy</Link>
              <Link className="font-sm color-white" to="/terms">Terms and conditions</Link>
              <Link className="font-sm color-white" to="/vacancy">Vacancy</Link>
            </div>
          </div>
          <div className="footer-link">
            <h4 className="color-white title">Get in touch</h4>
            <div className="d-flex column">
              <span className="font-sm color-white">+234 60 345 67890</span>
              <span className="font-sm color-white">enquiries@bahranda.com</span>
              <span className="font-sm color-white"></span>
              <div className="d-flex align-items-center">
                <div className="bg-color1-opacity round-icon border-r-circle margin-right-sm cursor-pointer">
                  <FaTwitter className="color-white font-sm" />
                </div>
                <div className="bg-color1-opacity round-icon border-r-circle margin-right-sm cursor-pointer">
                  <FaInstagram className="color-white font-sm" />
                </div>
                <div className="bg-color1-opacity round-icon border-r-circle margin-right-sm cursor-pointer">
                  <FaFacebookF className="color-white font-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const NewsLetter = () => {
  const { input, handleUserInput, error } = useFormInput()
  return (
    <form className="d-flex column padding-horizontal-lg padding-vertical-md newsletter bg-white">
      <span className="font-md margin-bottom-md">Subscribe to our mailing list</span>
      <input name="email" value={input} placeholder="Enter email address" onChange={handleUserInput} className=" padding-md margin-bottom-sm" />
      <button className="btn-color1 color-white">Subscribe</button>
    </form>
  )
}
export default Footer;