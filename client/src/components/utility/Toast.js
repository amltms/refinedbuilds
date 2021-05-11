import React, { useState, useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";

export const Toast = ({msg, setToast}) => {
    useEffect(() => {
        if(setToast){
            setTimeout(function(){ setToast(false) }, 3000);
        }
    },[]);
    return (
            <div className='toast warning'>
                <div>
                    <AiFillWarning className='icon'/>
                </div>
                <div>
                    <b>Warning </b>
                    <p>{msg}</p>
                </div>
                <div>
                    <button onClick={() => setToast(false)}>X</button>
                </div>
            </div>
    )
}
