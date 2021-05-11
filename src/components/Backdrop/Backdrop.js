import React from "react";
import { Transition } from "react-transition-group";
import animationTiming from "../../config/config ";

import "./Backdrop.css";

const backdrop = props => (
  <Transition
    in={props.show}
    mountOnEnter
    unmountOnExit
    timeout={animationTiming}
  >
    {state => {
      const cssClasses = [
        "Backdrop",
        state === "entering"
          ? "BackdropOpen"
          : state === "exiting"
          ? "BackdropClosed"
          : null,
      ];

      return (
        <div onClick={props.clicked} className={cssClasses.join(" ")}></div>
      );
    }}
  </Transition>
);

export default backdrop;
