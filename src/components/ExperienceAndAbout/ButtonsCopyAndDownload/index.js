import React, { useState } from "react";

import { copyEmail, email } from "../../Utils/Utils";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { showToggle } from "../../../state/action-creators";
const ButtonsCopyAndDownload = () => {
const state = useSelector((state) =>state.modal)
const dispatch = useDispatch();

    return (
        <React.Fragment>
            <button onClick={() => copyEmail(email)}>
                <strong>Copy e-mail</strong>
            </button>
            <button onClick={() => dispatch(showToggle())}>
                <strong>Download CV</strong>
            </button>

        </React.Fragment >
    );
};
export default ButtonsCopyAndDownload;

// ;() => {
                
//     const confirmBox = window.confirm(
//         "Do you really want to dwonload my CV"
//     )
//     if (confirmBox === true) {
//         window.location.href = cv;
//     }
// }