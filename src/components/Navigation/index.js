import React from 'react';
const Navigation = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    {/*using scrollToRef to scroll to right div */ }
    const navHeader = [
        { 'link': aboutref, 'text': 'About me' },
        { 'link': skillref, 'text': 'Skills' },
        { 'link': myworkref, 'text': 'Portfolio' },
        { 'link': blogref, 'text': 'Workstyle' },
        { 'link': contactref, 'text': 'Contact me' }
    ]
    return (
        <div className="header" ref={aboutref}>
            <h3>M.F.</h3>
            <div className="header__wrapper">
                <div className="header__nav">
                    {
                        navHeader.map((el, index) => {
                            return (
                                <div className='header__navLi' key={index}><a onClick={() => scrollToRef(el.link)}>{el.text}</a></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Navigation;