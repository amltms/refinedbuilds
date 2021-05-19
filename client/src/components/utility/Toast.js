import React, { useState, useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";

export const Toast = ({msg, setToast, toast}) => {
    let timeOut;

    function crossBtn() {
        //clear timer and remove toast
        setToast({...toast, visible: false})
        clearTimeout(timeOut);
    }

    useEffect(() => {
        //remove toast after 3 seconds
        if(toast.visible){
            timeOut = setTimeout(function(){ setToast({...toast, visible: false}); }, 3000);
        }
    },[toast.visible]);
    return (
        <div className={`toast warning ${toast.visible ? ('toast-up'): ('toast-down')}`}>
            <div>
                <AiFillWarning className='icon'/>
            </div>
            <div>
                <b>Warning </b>
                <p>{toast.msg}</p>
            </div>
            <div>
                <button onClick={crossBtn}>X</button>
            </div>
        </div>
    )
}
