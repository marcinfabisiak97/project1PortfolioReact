import React from "react";
import { Link } from "react-router-dom";
import cv from "../../../assets/cv.pdf";
export const ButtonMailto = ({ mailto }) => {

    return (
        <React.Fragment>
            <Link
                to="#"
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
                <button>
                    <strong>Hire me</strong>
                </button>
            </Link>
            <Link to={cv} target="_blank" download="cv Marcin Fabisiak">
                <button>
                    <strong>Download CV</strong>
                </button>
            </Link>
        </React.Fragment>
    );
};