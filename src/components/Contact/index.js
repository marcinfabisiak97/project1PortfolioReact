import React from 'react';
import ContactDetails from './ContactDetails';
import Form from './Form';
const Contact = ({ contactref }) => {
    return (
        <section className="contact" ref={contactref}>
            <Form />
            <ContactDetails />
        </section >
    )
}
export default Contact;