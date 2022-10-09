import React from "react";
import Portfolios from "./Portfolios";

const Myworks = ({ myworkref }) => {
    return (
        <React.Fragment>
            <article className="myWorks" ref={myworkref}>
                <h2 >&#47;&#47; My works</h2>
                <h3>Portfolio</h3>
                <p>I have tree main projects in my portfolio. First is one page site(this site), second is
                    a quiz aplication and third is one page project. Last project uses Typecsript.  </p>
            </article>
            <Portfolios />
        </React.Fragment>
    )
}
export default Myworks;