import React, { useRef } from 'react';
import Bars from '../Bars';

const About = ({ skillref }) => {
    const dref = useRef(null);
    return (
        <section ref={skillref} className="downPart">
            <section className="downPart__about">
                <h2 >&#47;&#47; About me</h2>
                <h3>All about Techy</h3>
                <p>
                    I am interested in practical creating innovative websites. I can
                    easily make and maintain a full functional React sites. I always
                    like to improve my skills and use new functionalities. When I create
                    a project, I always follow the DRY – KISS – YAGNI rules.
                </p>
                <h3>My interests</h3>
                <ul>
                    <li>music</li>
                    <li>football</li>
                    <li>cycling</li>
                </ul>
            </section>
            <section className="downPart__skills" ref={dref}>
                <h2 id="skills">&#47;&#47; Skills</h2>
                <p>All beneath techs or languages are known by practical site.</p>
                <Bars dref={dref} />
            </section>
        </section>
    );
};
export default About;
