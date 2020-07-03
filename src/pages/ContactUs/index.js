import React from 'react';
import { PageWrapper } from '../components';
import { ContactPage } from "./components"
import "./contact.scss";

const ContactUs = () => {
    return (
        <PageWrapper>
        <div className="padding-horizontal-lg"><h1 className="padding-bottom-md margin-top-md font-xlg font-weight-bold">Contact Us</h1>
        </div>
        <ContactPage />
        </PageWrapper>

    )
}

export default ContactUs;