import React, { useState } from 'react';
import { scrollToRef } from '../../components/Utils/Utils';
import { GiHamburgerMenu } from 'react-icons/gi'
import { TiDelete } from 'react-icons/ti'
const Navigation = ({ aboutref, skillref, myworkref, blogref, contactref }) => {

    const navHeader = [
        { 'link': skillref, 'text': 'About me' },
        { 'link': myworkref, 'text': 'Portfolio' },
        { 'link': blogref, 'text': 'Workstyle' },
        { 'link': contactref, 'text': 'Contact me' }
    ]
    const [isOpen, setOpen] = useState(true)
    console.log(isOpen)
    return (
        <header className="header" ref={aboutref}>
            <GiHamburgerMenu className={isOpen ? "header__burger" : "header__burger header__burger--invisible"} onClick={() => setOpen(!isOpen)} />
            <TiDelete className={isOpen ? "header__burger header__burger--invisible" : "header__burger"} onClick={() => setOpen(!isOpen)} />

            <h3>M.F.</h3>
            <article className="header__wrapper">
                <nav className={isOpen ? 'header__nav header__nav--invisible' : 'header__nav'}>
                    {
                        navHeader.map((el, index) => {
                            return (
                                <div className='header__navLi' key={index}><a onClick={() => scrollToRef(el.link)}>{el.text}</a></div>
                            )
                        })
                    }
                </nav>
            </article>

        </header>
    )
}
export default Navigation;