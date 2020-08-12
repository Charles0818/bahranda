import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { actions } from '../../helpers';
import { useFormInput, SubmitButton } from '../Form';
import HttpStatusNotification from '../HttpStatus';
import deliveryTruck from '../../assets/delivery-truck.png';
import logo from '../../assets/baranda.png';
const { otherActions: { newsletterRequest } } = actions;
const Footer = () => {
  return (
    <div>
      <section className="dealer padding-horizontal-xlg padding-vertical-lg bg-color1">
        <div className="dealer-btn margin-bottom-md">
          <h3 className="color-white font-xlg margin-bottom-md">Become a Dealer</h3>
          <Link to="/auth/register" className="btn bg-white font-weight-600 color1 font-sm">Get started</Link>
        </div>
        <img className="truck" src={deliveryTruck} alt="Bahranda van" />
      </section>
      <footer className="padding-horizontal-xlg padding-vertical-lg bg-dark">
        <div className="d-flex justify-content-s-between">
          <Link to="/"><img src={logo} alt="Bahranda logo" className="margin-bottom-md logo-lg" /></Link>
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
              <span className="font-sm color-white margin-bottom-sm">enquiries@bahranda.com</span>
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

export const AccountFooter = () => (
  <footer className="padding-horizontal-xlg padding-vertical-lg bg-dark" style={{width: '100%'}}>
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
          <span className="font-sm color-white margin-bottom-sm">enquiries@bahranda.com</span>
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
)

const mapDispatchToProps = dispatch =>
  bindActionCreators({ newsletterRequest }, dispatch)
const mapStateToProps = state => {
  const {
    loadingIndicators: { newsletter: loading },
    success: { newsletter: success },
    errors: { newsletter: error }
  } = state.otherReducer
  return { loading, success, error }
}
const NewsLetter = connect(mapStateToProps, mapDispatchToProps)(({ newsletterRequest, loading, success, error }) => {
  const { value: email, handleUserInput } = useFormInput();
  const { value: name, handleUserInput: setName } = useFormInput();
  console.log('this is the email', email)
  return (
    <form className="d-flex column padding-horizontal-lg padding-vertical-md newsletter bg-white">
      <span className="font-md margin-bottom-md">Subscribe to our mailing list</span>
      <input name="name" value={name} placeholder="Full name" onChange={setName} className=" padding-md margin-bottom-sm" />
      <input name="email" value={email} placeholder="Email address" onChange={handleUserInput} className=" padding-md margin-bottom-sm" />
      <SubmitButton
        isLoading={loading}
        text="Subscribe"
        action={() => newsletterRequest({ email, name })}
      />
      {(error || success) && <HttpStatusNotification  message={error || success} status={error ? 'error' : 'success'}  />}
    </form>
  )
})

export default Footer;