import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/github_icon.png';
import devicon from '../../assets/dev_icon.png';
import easycode from '../../assets/easy_code_button.png';
import cv from '../../assets/cv.pdf';
const Upperpartanddownpart = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    const myBar = [

        { 'klas': 'bar-javascript', 'text': 'javascript 60%' },
        { 'klas': 'bar-react', 'text': 'react 60%' },
        { 'klas': 'bar-typescript', 'text': 'typescript 40%' },
        { 'klas': 'bar-css', 'text': 'css 80%' },
        { 'klas': 'bar-html', 'text': 'html 100%' },
        { 'klas': 'bar-node', 'text': 'node 20%' },
    ]
    const Bar = (props) => {
        return (
            <div className="wrapper-bar">
                <div className={props.klas}>{props.text}</div>
            </div>
        )
    }

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
                        yers of experience within the field </p>
                    <div className="main-info_seework">
                        <p>See my work</p>
                        <a href='https://github.com/marcinfabisiak97'><img src={github} /></a>
                        <img src={devicon} />
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
                        <li>kitesurfing</li>
                        <li>cycling</li>
                    </ul>
                    <p>I finished Easy Code course <img src={easycode} /></p>
                </div>
                <div className="main-wrapper_bars">
                    <h2 id="skills">//Skills</h2>
                    <p>All beneath techs or languages are known by practical site.</p>
                    {
                        myBar.map((el, index) => {
                            return (<Bar key={index} klas={el.klas} text={el.text} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Upperpartanddownpart;
