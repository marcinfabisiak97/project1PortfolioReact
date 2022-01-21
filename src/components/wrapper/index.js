import React, { useRef } from 'react';
import twitter from '../../assets/twitter_icon.png';
import facebook from '../../assets/facebook_icon.png';
import linkedin from '../../assets/linkedin_icon.png';

const Wrapper = ({ aboutref, skillref, myworkref, blogref, contactref }) => {


    const navHeader = [
        { 'klass': 'header__navLi', 'link': aboutref, 'text': 'About me' },
        { 'klass': 'header__navLi', 'link': skillref, 'text': 'Skills' },
        { 'klass': 'header__navLi', 'link': myworkref, 'text': 'Portfolio' },
        { 'klass': 'header__navLi', 'link': blogref, 'text': 'Blog' },
        { 'klass': 'header__navLi', 'link': contactref, 'text': 'Contact me' }
    ]
    const Header = (props) => {
        const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
        return (
            <div className={props.klass} ><a onClick={() => scrollToRef(props.link)}>{props.text}</a></div>
        )
    }
    return (
        <div class="header" ref={aboutref}>
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

                    <div class="header__navLi"><img src={linkedin} alt="linkedin" /></div>
                </div>
            </div>
        </div>
    )
}
export default Wrapper;