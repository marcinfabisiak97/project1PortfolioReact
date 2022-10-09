import React, { useRef, useState, useEffect } from 'react';
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
    {/*using useRef hook to make navigation */ }
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
    {/*using handleScroll to slide to upper place */ }
    const handleScroll = () => {
        const YPosition = skillref.current.getBoundingClientRect().top;
        const offset = window.scrollY;
        if (offset > YPosition) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    return (
        <div className='page'>
            <Navigation {...{ aboutref, skillref, myworkref, blogref, contactref }} />
            {scrolled && <div className='page__upper' onClick={() => scrollToRef(aboutref)}><BsFillCaretUpFill className='icons' /></div>}
            <ExperienceAndAbout {...{ skillref }} />
            <Tools {...{ myworkref }} />
            <Myworks {...{ myworkref }} />
            <Workstyle {...{ blogref }} />
            <Contact {...{ contactref }} />
        </div>
    );
};
export default Homepage;