import React from "react";
import { Link } from "react-router-dom";
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf";
import { copyEmail, email } from "../../Utils/Utils";

const ButtonsCopyAndDownload = () => {
    return (
        <React.Fragment>
            <article >
                <button onClick={() => copyEmail(email)}>
                    <strong>Copy e-mail</strong>
                </button>
            </article>
            <Link to={cv} target="_blank" download="cv Marcin Fabisiak">
                <button>
                    <strong>Download CV</strong>
                </button>
            </Link>
        </React.Fragment>
    );
};
export default ButtonsCopyAndDownload;