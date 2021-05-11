import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = selIndex => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <li
        key={index}
        className="ListItem"
        onClick={() => this.removeItemHandler(index)}
      >
        {item}
      </li>
    ));

    const listItemsTG = this.state.items.map((item, index) => (
      <CSSTransition key={index} classNames="fade" timeout={400}>
        <li className="ListItem" onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <h3>TransitionGroup</h3>

        <TransitionGroup component="ul" className="List">
          {listItemsTG}
        </TransitionGroup>
        <br />

        <h3>Ordinary List</h3>
        <ul className="List">{listItems}</ul>
      </div>
    );
  }
}

export default List;
