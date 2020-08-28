import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  useEffect(() => {
    console.log("[MODAL.JS] RENDERED");
  });
  return (
    <React.Fragment>
      <Backdrop clicked={props.clicked} show={props.show}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

const CheckingFunction = (prevProps, nextProps) => {
  return (
    prevProps.show === nextProps.show ||
    prevProps.children === nextProps.children
  );
};
export default React.memo(Modal, CheckingFunction);
