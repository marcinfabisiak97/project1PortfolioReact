import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import cv from "../../../assets/cv Marcin Fabisiak FE.pdf";
import { close } from "../../../state/slices/modalSlice/modalSlice";
import axios from "axios";
const Modal = () => {
    const state = useSelector((state) => state.modal.count)
    const dispatch = useDispatch();
    const downloadFile = async () => {
        try {
            const response = await axios({
                url: cv,
                method: 'GET',
                responseType: 'blob',
            })
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'cv Marcin Fabisiak.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.log(error)
        }
    };

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
                <p>Do you really want to dwonload my CV?</p>
                <div className="modalContainer__ConfirmBtn">
                    <button onClick={() => { dispatch(close()) }}>No</button>
                    <button onClick={() => { downloadFile(); dispatch(close()) }}>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;