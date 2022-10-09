import React from "react";
import About from "./About";
import Experience from "./Experience";

const ExperienceAndAbout = ({ skillref }) => {
    return (
        <section className="upperpartAndDownpart" >
            <Experience />
            <About skillref={skillref} />
        </section>
    );
};
export default ExperienceAndAbout;
