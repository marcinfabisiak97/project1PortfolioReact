import React from 'react';
import Images from '../../../assets/exportFiles';
import Clipboard from 'react-clipboard-animation'
import { useState, useEffect } from "react"
import { copyEmail } from '../../Utils/Utils';
const email = 'marcibfabisiak123@gmail.com'

const ContactDetails = () => {
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [copied])
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
                        <div>
                            <p onClick={() => { setCopied(true); copyEmail(email) }}>marcibfabisiak123@gmail.com</p>
                            <Clipboard
                                copied={copied}
                                setCopied={setCopied}
                                text={email}
                                color='black'
                            />
                        </div>
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
        </React.Fragment >
    );
};

export default ContactDetails;