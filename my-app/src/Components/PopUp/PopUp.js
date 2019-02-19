import React, { Component } from "react";
import request from "superagent";
import SearchList from "./SearchList";

class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      books: []
    };
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };
  accessAPI = e => {
    if (this.state.searchField !== "") {
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({
          key: "AIzaSyAUkRtxNp9yHMsUMQ7bl-PoT2WGyUZvkZo",
          q: this.state.searchField,
          maxResults: 10
        })
        .then(data => {
          this.setState({
            books: [...data.body.items]
          });
        });
      console.log(this.state.books);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      this.accessAPI();
    }
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <h1>Add to {this.props.text}</h1>
            <div>
              <label htmlFor="searchAPI">Search :</label>
              <input
                type="text"
                placeholder="Insert search here..."
                id="searchAPI"
                onChange={this.handleSearch}
              />
            </div>
          </div>
          <SearchList books={this.state.books} />
          <button onClick={this.props.closePopUp}>Close</button>
        </div>
      </div>
    );
  }
}

export default PopUp;
