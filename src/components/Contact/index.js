import React from 'react';
import ContactDetails from './ContactDetails';
import Form from './Form';
import { useSelector } from 'react-redux';
import ModalForm from "./ModalFormAlert"
const Contact = ({ contactref }) => {
    const stateForm = useSelector(state => state.formModal.isOpen)
    return (
        <section className="contact" ref={contactref}>
            <Form />
            <ContactDetails />
            {stateForm && <ModalForm />}
        </section >
    )
}
export default Contact;