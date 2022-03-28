import React from 'react';
const Wrapper = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    const navHeader = [
        { 'klass': 'header__navLi', 'link': aboutref, 'text': 'About me' },
        { 'klass': 'header__navLi', 'link': skillref, 'text': 'Skills' },
        { 'klass': 'header__navLi', 'link': myworkref, 'text': 'Portfolio' },
        { 'klass': 'header__navLi', 'link': blogref, 'text': 'Workstyle' },
        { 'klass': 'header__navLi', 'link': contactref, 'text': 'Contact me' }
    ]
    const Header = (props) => {
        {/*using scrollToRef to make scroll to right div */ }
        const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
        return (
            <div className={props.klass} ><a onClick={() => scrollToRef(props.link)}>{props.text}</a></div>
        )
    }
    return (
        <div className="header" ref={aboutref}>
            <h3>M.F.</h3>
            <div className="header__wrapper">
                <div className="header__nav">
                    {
                        navHeader.map((el, index) => {
                            return (
                                <Header key={index} klass={el.klass} link={el.link} text={el.text} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Wrapper;