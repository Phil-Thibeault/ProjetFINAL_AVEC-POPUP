import React, { Component } from "react";

class ReadList extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <div className="List">
        <h1>READ LIST</h1>
      </div>
    );
  }
}

export default ReadList;
