import React from 'react';
import { Form, PageWrapper } from '../components';
const { FormField, useFormInput, SubmitButton, TextArea, useCheckbox, handleUserInput } = Form;

const ContactUs = () => {
  const { value: full_name, handleUserInput: setName, error: fullNameErr, isValid: fullNameIsValid } = useFormInput();
  const { value: phone, handleUserInput: setPhone, isValid: phoneIsValid, error: phoneErr } = useFormInput();
  const { value: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput();
  const { value: message, handleUserInput: setMessage, error: messageErr, isValid: messageIsValid } = useFormInput();
  const validateAllFields = messageIsValid && emailIsValid && fullNameIsValid
  return (
    <PageWrapper>
      <div className="d-flex justify-content-center">        
        <div className="contact-card bg-white padding-horizontal-lg margin-vertical-md border-r-5 card">
          <h1 className="margin-bottom-sm margin-top-md font-lg font-weight-bold">Contact Us</h1>
          <form className="d-flex column fadeIn-animation" style={{width: '100%'}}>
            <p className="font-md margin-bottom-md">To get in touch please contact us directly or fill out this form, we will get in touch promptly</p>
            <div className="d-flex">
              <FormField name="Full name" value={full_name} onChange={setName} err={fullNameErr} placeholder="Name" className="flex-equal margin-right-sm"/>
              <FormField type="tel" name="phone number" value={phone} onChange={setPhone} err={phoneErr}  placeholder="Phone Number" className="flex-equal" />
            </div>
            <FormField type="email" name="email" value={email} onChange={setEmail} err={emailErr}  placeholder="Email" />
            <TextArea name="send message" label="Message" value={message} onChange={setMessage} placeholder="Type your message..." />
            <SubmitButton text="SEND" disabled={!validateAllFields} className="padding-horizontal-lg" action={() => null }  />
          </form>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ContactUs;