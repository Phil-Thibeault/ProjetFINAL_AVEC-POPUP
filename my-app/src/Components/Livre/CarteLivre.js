import React, { Component } from "react";

class CarteLivre extends Component {
  render() {
    return (
      <div className="carteLivre">
        <img src={this.props.img} className="imgCarteLivre"></img>
        <h1>{this.props.title}</h1>
        <h2>{this.props.author}</h2>
      </div>
    );
  }
}

export default CarteLivre;
