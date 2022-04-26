import React from 'react';
import ContactDetails from './ContactDetails';
import Form from './Form';
const Contact = ({ contactref }) => {
    return (
        <div className="contact" ref={contactref}>
            <Form />
            <ContactDetails />
        </div >
    )
}
export default Contact;