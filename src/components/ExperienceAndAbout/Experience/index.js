import React from 'react';
import github from "../../../assets/github_icon.png";
import { ButtonMailto } from '../ButtonMailto';
const Experience = () => {
    return (
        <React.Fragment>
            <div className="main-upperpart">
                <div className="main-info">
                    <h2> // Hi, My name is Martin Fabisiak</h2>
                    <h3>Software Engineer</h3>
                    <p>
                        Passionate Techy and Tech Author
                        <br />
                        with 1 year of experience within the field{" "}
                    </p>
                    <div className="main-info_seework">
                        <a
                            target="blank"
                            href="https://github.com/marcinfabisiak97/one-page-portfolio-react/tree/dev"
                        >
                            <p>See my work in github</p>
                        </a>
                        <a
                            target="blank"
                            href="https://github.com/marcinfabisiak97/one-page-portfolio-react/tree/dev"
                        >
                            <img src={github} />
                        </a>
                    </div>
                </div>
                <div className="main-photo_rightdescription">
                    <h1> // I am freelancer</h1>
                    <p>Contact me if you want to work with me</p>
                    <div>
                        <ButtonMailto mailto={"mailto:marcinfabisiak123@gmail.com"} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Experience;