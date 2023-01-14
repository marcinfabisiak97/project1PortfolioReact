import React, { useState, useEffect } from 'react';

const myBar = [
    { style: "bar__javascript bar__javascript--width", class: "bar__javascript", text: "javascript 60%" },
    { style: "bar__react bar__react--width", class: "bar__react", text: "react 60%" },
    { style: "bar__typescript bar__typescript--width", class: "bar__typescript", text: "typescript 40%" },
    { style: "bar__css bar__css--width", class: "bar__css", text: "css 80%" },
    { style: "bar__html bar__html--width", class: "bar__html", text: "html 100%" },
    { style: "bar__node bar__node--width", class: "bar__node", text: "node 20%" },
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
    //widowns remove
    return (
        <React.Fragment>
            {myBar.map((el, index) => {
                { /*making animation using css transform and hook useEffect and function handleScroll */ }
                return (
                    <section className="wrapper-bar" key={index}>
                        <article className={scrolled ? el.style : el.class}>
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
