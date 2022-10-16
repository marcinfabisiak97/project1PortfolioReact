import React from 'react';

const Navigation = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    {/*using scrollToRef to scroll to right div */ }
    const navHeader = [
        { 'link': skillref, 'text': 'About me' },
        { 'link': myworkref, 'text': 'Portfolio' },
        { 'link': blogref, 'text': 'Workstyle' },
        { 'link': contactref, 'text': 'Contact me' }
    ]
    return (
        <header className="header" ref={aboutref}>
            <h3>M.F.</h3>
            <article className="header__wrapper">
                <nav className="header__nav">
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