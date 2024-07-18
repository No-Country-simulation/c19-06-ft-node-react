import React from "react";
import style from "./Modal.module.css";
import x from "../../public/icons/x.png";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClose}>
          <img src={x} alt="cruz" className={style.x}/>
        </button>
        <div className={style.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
