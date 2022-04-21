import React from 'react';
const Navigation = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    {/*using scrollToRef to scroll to right div */ }
    const navHeader = [
        { 'klass': 'header__navLi', 'link': aboutref, 'text': 'About me' },
        { 'klass': 'header__navLi', 'link': skillref, 'text': 'Skills' },
        { 'klass': 'header__navLi', 'link': myworkref, 'text': 'Portfolio' },
        { 'klass': 'header__navLi', 'link': blogref, 'text': 'Workstyle' },
        { 'klass': 'header__navLi', 'link': contactref, 'text': 'Contact me' }
    ]
    return (
        <div className="header" >
            <h3>M.F.</h3>
            <div className="header__wrapper">
                <div className="header__nav">
                    {
                        navHeader.map((el, index) => {
                            return (
                                <div className={el.klass} ><a onClick={() => scrollToRef(el.link)}>{el.text}</a></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Navigation;