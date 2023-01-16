import React from "react";
import { copyEmail, email } from "../../Utils/Utils";
import { useDispatch } from 'react-redux';
import { open } from "../../../state/slices/modalSlice/modalSlice";
const ButtonsCopyAndDownload = () => {
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <button onClick={() => copyEmail(email)}>
                <strong>Copy e-mail</strong>
            </button>
            <button onClick={() => dispatch(open())}>
                <strong>Download CV</strong>
            </button>

        </React.Fragment >
    );
};
export default ButtonsCopyAndDownload;
