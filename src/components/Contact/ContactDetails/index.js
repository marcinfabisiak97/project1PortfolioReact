import React from 'react';
import Images from '../../../assets/exportFiles';
import Clipboard from 'react-clipboard-animation'
import { useState, useEffect } from "react"
import { copyEmail } from '../../Utils/Utils';
import { useSelector } from 'react-redux';

const ContactDetails = () => {
    const state = useSelector((state) => state.data)
    const [copied, setCopied] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [copied])

    return (
        <section className='contactDetails'>
            <article className="phoneAndEmail">
                <figure>
                    <a href={`tel:${state.phone}`}>
                        <img src={Images.contact} alt="contact" />
                    </a>
                </figure>
                <article className="phoneAndEmail__text">
                    <div>
                        <p onClick={() => { setCopied(true); copyEmail(state.email) }}>{state.email}</p>
                        <Clipboard
                            copied={copied}
                            setCopied={setCopied}
                            text={state.email}
                            color='black'
                        />
                    </div>
                    <a href={`tel:${state.phone}`}><p>{state.phone}</p></a>
                </article>
            </article>
            <article className="descr">
                <figure className="descr__photo">
                    <img src={Images.devPhoto} alt="developer" />
                </figure>
                <p>author: {state.author}</p>
                <p>description: Front-End Developer</p>
                <a target="_blank" href={state.gitHub}>
                    <p>git: {state.gitHub}</p>
                </a>
            </article>
        </section>
    );
};

export default ContactDetails;