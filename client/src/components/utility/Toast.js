import React, { useEffect, useRef } from "react";
import { AiFillWarning } from "react-icons/ai";

export const Toast = ({ setToast, toast }) => {
  const timer = useRef(null);

  function crossBtn() {
    //clear timer and remove toast
    setToast({ ...toast, visible: false });
    clearInterval(timer.current);
  }

  useEffect(() => {
    //remove toast after 3 seconds
    if (toast.visible) {
      timer.current = setTimeout(function () {
        setToast({ ...toast, visible: false });
      }, 3000);
    }
  }, [toast, setToast]);

  return (
    <div
      className={`toast warning ${toast.visible ? "toast-up" : "toast-down"}`}
    >
      <div>
        <AiFillWarning className="icon" />
      </div>
      <div>
        <b>Warning </b>
        <p>{toast.msg}</p>
      </div>
      <div>
        <button onClick={crossBtn}>X</button>
      </div>
    </div>
  );
};
