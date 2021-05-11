import React, { Component, Fragment } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  state = {
    modelIsOpen: false,
    showBlock: false,
    transitionEvent: null,
  };
  showModal = () => {
    this.setState({
      modelIsOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      modelIsOpen: false,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState(prevState => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => this.setState({ transitionEvent: "onEnter" })}
          onEntering={() => this.setState({ transitionEvent: "onEntering" })}
          onEntered={() => this.setState({ transitionEvent: "onEntered" })}
          onExit={() => this.setState({ transitionEvent: "onExit" })}
          onExiting={() => this.setState({ transitionEvent: "onExiting" })}
          onExited={() => this.setState({ transitionEvent: "onExited" })}
        >
          {state => {
            const opacity = ["entering", "exiting"].includes(state) ? 0 : 1;

            return (
              <Fragment>
                <p>
                  {`state:${state}, opacity: 
                  ${opacity}`}
                </p>
                <p>{`Transition event:${this.state.transitionEvent}`}</p>
                <div
                  style={{
                    background: "red",
                    width: 100,
                    height: 100,
                    margin: "auto",
                    transition: "opacity 1s ease-out",
                    opacity: opacity,
                  }}
                ></div>
              </Fragment>
            );
          }}
        </Transition>

        <Modal show={this.state.modelIsOpen} closed={this.closeModal} />
        <Backdrop clicked={this.closeModal} show={this.state.modelIsOpen} />

        <button onClick={this.showModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
