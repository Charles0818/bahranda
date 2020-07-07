import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Spinners, Form } from '../../../components';
import {MdLocationOn, MdEmail} from 'react-icons/md';
import {FaPhoneAlt, FaTwitter, FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from "react-icons/fi";
import ContactMap from "../contactMap"
const { FormField, useFormInput, SubmitButton, TextArea, useCheckbox } =Form;

const ContactPage = () => {
    return (
        <div className="d-flex justify-content-s-between padding-horizontal-lg">
            <div>
                <form className="d-flex column fadeIn-animation" style={{width: '100%'}}>
                <p className="font-lg">To get in touch please contact us directly or fill out <br></br> this form, we will get in touch prompty</p>
                <FormField name="text" value={""}  placeholder="Name" className="margin-top-lg" />
                <FormField name="nunmber" value={""}  placeholder="Phone Number" className="margin-top-sm" />
                <FormField name="email" value={""}  placeholder="Email" className="margin-top-sm" />
                <label className="margin-bottom-sm margin-top-sm">Message</label>
                {/* <FormField name="text" value={""}  placeholder="Write your message" label="Message" /> */}
                <TextArea value={""} placeholder="Type your message..." />
                {/* <textarea value={""} label="Message" placeholder="Type your message..." className="padding-lg slim-border border-r-10" style={{width: '100%'}}/>  */}
                <SubmitButton text="SEND" className="padding-horizontal-lg" action={() => null }  />
                 </form>
            </div>
            <div className="d-flex column">
                <div>
                    <ContactMap />
                </div>
                <div className="d-flex">
                    <MdLocationOn color="#069801"  className="font-lg"/>
                    <p  className="font-lg">71, Solo Makinde close, Amebo avenue, Ikotun</p>
                      </div>
                      <div className="d-flex">
                    <MdEmail color="#069801" className="font-lg"/>
                    <p  className="font-lg">enquiries@bahranda.com</p>
                      </div>
                      <div className="d-flex justify-content-s-between">
                    <FaPhoneAlt color="#069801"  className="font-lg"/>
                    <p  className="font-lg">+234 80 345 67890</p>
                      </div>
                      <div className="d-flex justify-content-s-between" style={{width: '35%'}}>
                          <div className="border-r-circle bg-color1 social "><FaTwitter className="color-white font-lg" style={{margin: '12px'}}/></div>
                          <div className="border-r-circle bg-color1 social" ><FiInstagram className="color-white font-lg" style={{margin: '12px'}}/></div>
                          <div className="border-r-circle bg-color1 social" ><FaFacebookF className="color-white font-lg" style={{margin: '12px'}}/></div>

                      </div>

            </div>
        </div>
    )
}

export default ContactPage;