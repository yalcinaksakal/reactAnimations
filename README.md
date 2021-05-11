react animations

react-transition-group

Transition component : implemented on BackDrop component (
in
timeout
mountOnEnter
unmountOnExit
onEnter
onEntering
onEntered
onExit
onExiting
onExited)

CSSTransition component : implemented in Modal component(Modal.js)
ClassNames will handle class changes automatically
in CSS
.ClasName-enter
.ClasName-enter-active
.ClasName-exit
.ClasName-exit-active
or in js
classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
        // appear,
        // appear1Active
      }}

TransitionGroup (List.js) automatically sets in property in Transition or CSSTransition componnent
