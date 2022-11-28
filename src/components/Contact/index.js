import React from 'react';
import ContactDetails from './ContactDetails';
import Form from './Form';
const Contact = ({ contactref }) => {
    return (
        <footer className="contact" ref={contactref}>
            <Form />
            <ContactDetails />
        </footer >
    )
}
export default Contact;