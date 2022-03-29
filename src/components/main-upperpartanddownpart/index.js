import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/github_icon.png';
import cv from '../../assets/cv.pdf';
import { useState, useRef, useEffect } from 'react';
const Upperpartanddownpart = ({ skillref }) => {
    const [scrolled, setScrolled] = useState(false);
    const dref = useRef(null);
    const handleScroll = () => {
        const YPosition = dref.current.getBoundingClientRect().top;
        const offset = window.scrollY;
        if (offset > YPosition) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    const myBar = [
        { 'styl': '60%', 'klas': 'bar-javascript', 'text': 'javascript 60%' },
        { 'styl': '60%', 'klas': 'bar-react', 'text': 'react 60%' },
        { 'styl': '40%', 'klas': 'bar-typescript', 'text': 'typescript 40%' },
        { 'styl': '80%', 'klas': 'bar-css', 'text': 'css 80%' },
        { 'styl': '100%', 'klas': 'bar-html', 'text': 'html 100%' },
        { 'styl': '20%', 'klas': 'bar-node', 'text': 'node 20%' },
    ]
    const ButtonMailto = ({ mailto }) => {
        return (
            <React.Fragment>
                <Link
                    to='#'
                    onClick={(e) => {
                        window.location = mailto;
                        e.preventDefault();
                    }}
                >
                    <button><strong>Hire me</strong></button>
                </Link>
                <Link to={cv}
                    target="_blank"
                    download='cv Marcin Fabisiak'>
                    <button><strong>Download CV</strong></button>
                </Link>
            </React.Fragment>
        );
    };
    return (
        <div className="main-upperpartanddownpart col-12">
            <div className="main-upperpart">
                <div className="main-info">
                    <h2> // Hi, My name is Martin Fabisiak</h2>
                    <h3>Software Engineer</h3>
                    <p>Passionate Techy and Tech Author<br />with 1
                        year of experience within the field </p>
                    <div className="main-info_seework">
                        <p>See my work in github</p>
                        <a href='https://github.com/marcinfabisiak97/one-page-portfolio-react/tree/dev'><img src={github} /></a>

                    </div>
                </div>
                <div className="main-photo_rightdescription">
                    <h1> // I am freelancer</h1>
                    <p>Contact me if you want to work with me</p>
                    <div>
                        <ButtonMailto mailto={'mailto:marcinfabisiak123@gmail.com'} />
                    </div>
                </div>
            </div>
            <div className="main-downpart">
                <div className="main-photo_belowdescription">
                    <h2 ref={skillref}> // About me</h2>
                    <h3>All about Techy</h3>
                    <p>I am interested in practical creating innovative websites.
                        I can easily make and maintain a full functional React sites.
                        I always like to improve my skills and use new functionalities.
                        I've recently started to improve make react with Typescript to make
                        it more errorproof.
                    </p>
                    <h3>My interests</h3>
                    <ul>
                        <li>music</li>
                        <li>boxing</li>
                        <li>cycling</li>
                    </ul>
                </div>
                <div className="main-wrapper_bars" ref={dref}>
                    <h2 id="skills">//Skills</h2>
                    <p>All beneath techs or languages are known by practical site.</p>
                    {
                        myBar.map((el, index) => {
                            return (
                                <div className="wrapper-bar" >
                                    <div key={index} style={{ width: `${(scrolled ? el.styl : "20%")}` }} className={el.klas}>
                                        <p style={{ display: `${(scrolled ? 'block' : "none")}` }}>{el.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}
export default Upperpartanddownpart;
