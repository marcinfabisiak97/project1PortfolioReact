import React from 'react';
import Images from '../../../assets/exportFiles';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    return (
        <React.Fragment>
            <section className='contactDetails'>
                <article className="phoneAndEmail">
                    <figure>
                        <a href="tel:48604132689">
                            <img src={Images.contact} alt="contact" />
                        </a>
                    </figure>
                    <article className="phoneAndEmail__text">
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
                    </article>
                </article>
                <article className="descr">
                    <figure className="descr__photo">
                        <img src={Images.devPhoto} alt="developer" />
                    </figure>
                    <p>author: Marcin Fabisiak</p>
                    <p>description: Frontend Developer</p>
                    <a target="_blank" href='https://github.com/marcinfabisiak97'>
                        <p>git: https://github.com/marcinfabisiak97</p>
                    </a>
                </article>
            </section>
        </React.Fragment>
    );
};

export default ContactDetails;