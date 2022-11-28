import React, { useState } from "react";
import { Link } from "react-router-dom";
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf";
import { copyEmail, email } from "../../Utils/Utils";

const ButtonsCopyAndDownload = () => {
    return (
        <React.Fragment>
            <button onClick={() => copyEmail(email)}>
                <strong>Copy e-mail</strong>
            </button>
            <button onClick={() => {
                const confirmBox = window.confirm(
                    "Do you really want to dwonload my CV"
                )
                if (confirmBox === true) {
                    window.location.href = cv;
                }
            }
            }>
                <strong>Download CV</strong>
            </button>

        </React.Fragment >
    );
};
export default ButtonsCopyAndDownload;