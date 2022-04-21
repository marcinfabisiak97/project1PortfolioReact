import React from "react";
import Portfolios from "./Portfolios";
const Myworks = ({ myworkref }) => {

    return (
        <React.Fragment>
            <div className="main-wrapper_myworks" ref={myworkref}>
                <h2 id="myworks">//My works</h2>
                <h3>Portfolio</h3>
                <p>I have tree main projects in my portfolio. First is one page site(this site), second is
                    a quiz aplication and third is one page project. Last project uses Typecsript.  </p>
            </div>
            <Portfolios />
        </React.Fragment>
    )
}
export default Myworks;