import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./List.css";
let count = 3;
class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState(prevState => {
      count++;
      return {
        items: prevState.items.concat(count),
      };
    });
  };

  removeItemHandler = selItem => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item !== selItem),
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

    const listItemsTG = this.state.items.map(item => (
      <CSSTransition key={item} classNames="fade" timeout={1000}>
        <li className="ListItem" onClick={() => this.removeItemHandler(item)}>
          {`Item id: ${item}`}
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
