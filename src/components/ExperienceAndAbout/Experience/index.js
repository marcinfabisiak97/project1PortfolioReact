import React from 'react';
import Images from '../../../assets/exportFiles';
import { ButtonMailto } from '../ButtonMailto';
import Typewriter from 'typewriter-effect';
const Experience = () => {
    return (
        <React.Fragment>
            <section className="upperPart">
                <article className="experience">
                    <h2>&#47;&#47; Hi, My name is Martin Fabisiak</h2>
                    <Typewriter
                        className="experience__welcome"
                        onInit={(typewriter) => {
                            typewriter.typeString('React Developer')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Front-End Developer')
                                .pauseFor(3000)
                                .deleteAll()
                                .start()
                        }}
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <p>
                        Passionate Techy and Tech Author
                        <br />
                        with 1 year of experience within the field.
                    </p>
                    <figure className="experience__seework">
                        <a target="blank" href="https://github.com/marcinfabisiak97/one-page-portfolio-react/tree/dev">
                            <p>See my work in github</p>
                        </a>
                        <a target="blank" href="https://github.com/marcinfabisiak97/one-page-portfolio-react/tree/dev">
                            <img src={Images.gitHub} alt="github" />
                        </a>
                    </figure>
                </article>
                <article className="freelanceDescr">
                    <h1>&#47;&#47; I am freelancer</h1>
                    <p>Contact me if you want to work with me</p>
                    <div>
                        <ButtonMailto mailto={"mailto:marcinfabisiak123@gmail.com"} />
                    </div>
                </article>
            </section>
        </React.Fragment>
    );
};

export default Experience;