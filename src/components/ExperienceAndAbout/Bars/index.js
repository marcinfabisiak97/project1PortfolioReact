import React, { useState, useEffect } from 'react';

const myBar = [
    { styl: "bar__javascript bar__javascript--width", klas: "bar__javascript", text: "javascript 60%" },
    { styl: "bar__react bar__react--width", klas: "bar__react", text: "react 60%" },
    { styl: "bar__typescript bar__typescript--width", klas: "bar__typescript", text: "typescript 40%" },
    { styl: "bar__css bar__css--width", klas: "bar__css", text: "css 80%" },
    { styl: "bar__html bar__html--width", klas: "bar__html", text: "html 100%" },
    { styl: "bar__node bar__node--width", klas: "bar__node", text: "node 20%" },
];

const Bars = ({ dref }) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const YPosition = dref.current.getBoundingClientRect().top;
        const offset = window.scrollY;
        if (offset > YPosition) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <React.Fragment>
            {myBar.map((el, index) => {
                { /*making animation using css transform and hook useEffect and function handleScroll */ }
                return (
                    <section className="wrapper-bar" key={index}>
                        <article className={scrolled ? el.styl : el.klas}>
                            <p className={scrolled ? "bar__displayBlock" : "bar__displayNone"}>
                                {el.text}
                            </p>
                        </article>
                    </section>
                );
            })}
        </React.Fragment>
    );
};
export default Bars;
