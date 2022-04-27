import React from 'react';
import contact from '../../../assets/contact_icon.png';
import devPhoto from '../../../assets/devPhoto.jpg';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    return (
        <React.Fragment>
            <div className='contactDetails'>
                <div className="phoneAndEmail">
                    <a href="tel:48604132689"> <img src={contact} alt="contact" /></a>
                    <div className="phoneAndEmail__text">
                        <Link
                            to='#'
                            onClick={(e) => {
                                window.location = 'mailto:marcinfabisiak123@gmail.com';
                                e.preventDefault();
                            }}
                        >
                            <p>marcibfabisiak123@gmail.com</p>
                        </Link>
                        <a href="tel:48604132689"><p>+48 604 132 689</p></a>
                    </div>
                </div>
                <div className="descr">
                    <div className="descr__photo">
                        <img src={devPhoto} alt="developer" />
                    </div>
                    <p>author: Marcin Fabisiak</p>
                    <p>description: Frontend Developer</p>
                    <a target="_blank" href='https://github.com/marcinfabisiak97'>
                        <p>git: https://github.com/marcinfabisiak97</p>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactDetails;