import React from "react";
import About from "./About";
import Experience from "./Experience";

const ExperienceAndAbout = ({ skillref }) => {
    return (
        <div className="upperpartAndDownpart" >
            <Experience />
            <About skillref={skillref} />
        </div>
    );
};
export default ExperienceAndAbout;
