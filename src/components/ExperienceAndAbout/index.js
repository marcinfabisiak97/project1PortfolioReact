import React, { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Modal from "./ModalAlert"
import { useSelector } from "react-redux";
const ExperienceAndAbout = ({ skillref }) => {
    const state = useSelector((state) => state.modal.count)
    return (
        <section className="upperpartAndDownpart" >
            <Experience />
            <About skillref={skillref} />
            {state && <Modal />}
        </section>
    );
};
export default ExperienceAndAbout;
