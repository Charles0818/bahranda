import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { Spinners, Form } from '../../../components';

const ContactPage = () => {
    const { FormField, useFormInput, SubmitButton, TextArea, useCheckbox, handleUserInput } =Form;
    const { value: full_name, handleUserInput: setName, error: fullNameErr, isValid: fullNameIsValid } = useFormInput();
    const { value: phone, handleUserInput: setPhone, isValid: phoneIsValid, error: phoneErr } = useFormInput();
    const { value: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput();
    const { value: message, handleUserInput: setMessage, error: messageErr, isValid: messageIsValid } = useFormInput();

    return (
        <div className="d-flex justify-content-center padding-horizontal-lg">        
            <div>
                <form className="d-flex column fadeIn-animation" style={{width: '100%'}}>
                <p className="font-lg contact">To get in touch please contact us directly or fill out <br></br> this form, we will get in touch promptly</p>
                <FormField name="Full name" value={full_name} onChange={setName} err={fullNameErr} placeholder="Name" className="margin-top-lg"/>
                <FormField type="tel" name="phone number" value={phone} onChange={setPhone} err={phoneErr}  placeholder="Phone Number" className="margin-top-sm" />
                <FormField type="email" name="email" value={email} onChange={setEmail} err={emailErr}  placeholder="Email" className="margin-top-sm" />
                <label className="margin-bottom-sm margin-top-sm">Message</label>
                <TextArea name="send message" value={message} onChange={setMessage} placeholder="Type your message..." />
                <SubmitButton text="SEND" className="padding-horizontal-lg" action={() => null }  />
                 </form>
            </div>
          
        </div>
    )
}

export default ContactPage;