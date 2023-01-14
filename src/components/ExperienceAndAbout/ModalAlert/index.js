import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideToggle } from "../../../state/action-creators";
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf";
const Modal = () => {
    const state = useSelector((state) => state.modal)
    const dispatch = useDispatch();
    console.log(state)
    const handleDeleteAll = () => {
        fetch(cv).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = "cv";
                alink.click();
            })
        })
    }
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
                    <button onClick={() => dispatch(hideToggle())}>X</button>
                </div>
                <p>Do you really want to dwonload my CV?</p>
                <div className="modalContainer__ConfirmBtn">
                    <button onClick={() => { dispatch(hideToggle()) }}>No</button>
                    <button onClick={() => { handleDeleteAll(); dispatch(hideToggle()) }}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;