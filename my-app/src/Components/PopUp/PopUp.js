import React, { Component } from "react";
import request from "superagent";
import SearchList from "./SearchList";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "", 
      books: [],
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
          maxResults: 40
        })
        .then(data => {
          this.setState({
            books: [...data.body.items]
          });
        });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.readList !== this.state.readList){
      alert(this.state.readList);
    }
    if (prevState.searchField !== this.state.searchField) {
      this.accessAPI();
    }
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="booksHere">
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
          <SearchList books={this.state.books} readList={this.props.readList} wantList={this.props.wantList} currentPage={this.props.currentPage}/>
          <button onClick={this.props.closePopUp}>Close</button>
        </div>
      </div>
    );
  }
}

export default PopUp;
