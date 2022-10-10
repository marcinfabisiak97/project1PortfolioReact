import React, { useRef } from 'react';
import { useScroll, scrollToRef } from '../../components/Utils/Utils';
import Navigation from '../../components/Navigation';
import ExperienceAndAbout from '../../components/ExperienceAndAbout';
import Tools from '../../components/Tools';
import Myworks from '../../components/Myworks';
import Workstyle from '../../components/Workstyle';
import Contact from '../../components/Contact'
import { BsFillCaretUpFill } from "react-icons/bs";

const Homepage = () => {
    const aboutref = useRef(null);
    const skillref = useRef(null);
    const myworkref = useRef(null);
    const blogref = useRef(null);
    const contactref = useRef(null);
    const [scrolled] = useScroll(skillref)
    return (
        <main className='page'>
            <Navigation {...{ aboutref, skillref, myworkref, blogref, contactref }} />
            {scrolled && <div className='page__upper' onClick={() => scrollToRef(aboutref)}><BsFillCaretUpFill className='icons' /></div>}
            <ExperienceAndAbout {...{ skillref }} />
            <Tools {...{ myworkref }} />
            <Myworks {...{ myworkref }} />
            <Workstyle {...{ blogref }} />
            <Contact {...{ contactref }} />
        </main>
    );
};
export default Homepage;