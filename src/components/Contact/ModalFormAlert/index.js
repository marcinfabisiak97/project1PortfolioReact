import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { close } from "../../../state/slices/formModalSlice/formModalSlice";
const ModalForm = () => {
    const state = useSelector((state) => state.formModal.isOpen)
    const stateData = useSelector((state) => state.data)
    const dispatch = useDispatch();
    useEffect(() => {
        if (state) {
            document.body.style.overflow = 'hidden'
        }
        document.body.style.overflow = 'unset'
    }, [state])
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modalContainer__CloseBtn">
                    <button onClick={() => dispatch(close())}>X</button>
                </div>
                <p>An email has been sent to {stateData.email} </p>
                <div className="modalContainer__ConfirmBtn">
                    <button onClick={() => { dispatch(close()) }}>Ok</button>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;