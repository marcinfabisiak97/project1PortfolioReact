import React, { useRef } from 'react';
import Bars from '../Bars';
const About = ({ skillref }) => {
    const dref = useRef(null);
    return (
        <div className="main-downpart">
            <div className="main-photo_belowdescription">
                <h2 ref={skillref}> // About me</h2>
                <h3>All about Techy</h3>
                <p>
                    I am interested in practical creating innovative websites. I can
                    easily make and maintain a full functional React sites. I always
                    like to improve my skills and use new functionalities. I've recently
                    started to improve make react with Typescript to make it more
                    errorproof.
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
                <Bars dref={dref} />
            </div>
        </div>
    );
};

export default About;