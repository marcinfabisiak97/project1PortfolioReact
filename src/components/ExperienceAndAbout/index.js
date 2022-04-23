import React from "react";
import About from "./About";
import Experience from "./Experience";

const ExperienceAndAbout = ({ skillref }) => {

    return (
        <div className="main-upperpartanddownpart" >
            <Experience />
            <About skillref={skillref} />
        </div>
    );
};
export default ExperienceAndAbout;
