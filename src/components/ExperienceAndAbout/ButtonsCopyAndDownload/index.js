import React from "react";
import Clipboard from 'react-clipboard-animation'
import { copyEmail } from "../../Utils/Utils";
import { useDispatch, useSelector } from 'react-redux';
import { open } from "../../../state/slices/modalSlice/modalSlice";
import { useChangeCopiedStateToDefaultAfter } from '../../Hooks/hooks'
const ButtonsCopyAndDownload = () => {
    const state = useSelector((state) => state.data)
    const dispatch = useDispatch();
    const [copied, setCopied] = useChangeCopiedStateToDefaultAfter(1000)
    return (
        <article className="copyAndDownloadButton">
            <button onClick={() => { setCopied(true); copyEmail(state.email) }}>
                <strong>Copy e-mail</strong>
                <Clipboard
                    style={"width:100px"}
                    copied={copied}
                    setCopied={setCopied}
                    text={state.email}
                    color='black'
                />
            </button>

            <button onClick={() => dispatch(open())}>
                <strong>Download CV</strong>
            </button>

        </article>
    );
};
export default ButtonsCopyAndDownload;
