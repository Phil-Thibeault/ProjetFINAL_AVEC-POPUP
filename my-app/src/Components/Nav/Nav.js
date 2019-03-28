import React, { Component } from "react";
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class Nav extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const page = e.target.id;
    this.props.changePage(page);
  }

  render() {
    let button;
    if (this.props.showButton) {
      button = (
        <button onClick={this.props.popUp} className="addBook show">
          <i
            className="fas fa-plus"
            style={{ fontSize: "0.9em", marginRight: "5px" }}
          />
          Add
        </button>
      );
    } else {
      button = "";
    }
    return (
      <nav>
        <div className="logo" />
        <ul>
          <li>
            <button className="links" onClick={this.handleClick} id="1">
              Owned List
            </button>
          </li>
          <li>
            <button className="links" onClick={this.handleClick} id="2">
              Wish List
            </button>
          </li>
          <li>
            <button className="links" onClick={this.handleClick} id="3">
              BookList Recommends
            </button>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
        </ul>
        {button}
      </nav>
    );
  }
}

export default Nav;
