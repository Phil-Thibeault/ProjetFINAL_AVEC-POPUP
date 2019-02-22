import React, { Component } from "react";

class SearchBook extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let image;
    let author;
    let string;

    if (this.props.img === undefined) {
      image = "./noImage.png";
    } else {
      image = this.props.img;
    }

    if (this.props.author === undefined) {
      author = "Unknown";
    } else {
      author = this.props.author;
    }

    if (this.props.description === undefined || this.props.description === "") {
      string = "No description available.";
    } else {
      string = this.props.description.substring(0, 200) + "...";
    }

    return(
      <div className="book">
      <div
        style={{
          backgroundImage: "url(" + image + ")"
        }}
        className="cover"
      />
      <div className="allInfo">
        <div className="mainInfo">
          <div className="title">
            <h2 className="titleName">{this.props.title}</h2>
            <h2 className="author">{author}</h2>
          </div>
          <div>
            <h3 className="date">{this.props.datePublished}</h3>
            <button onClick={() => {this.props.currentPage === "ReadList" ? (this.props.readList([image, this.props.title, author])) : (this.props.wantList([image, this.props.title, author]))}}>Add to list</button>
          </div>
        </div>
        <p className="description">
          {string}
          {string !== "No description available." ? (
            <a href="#">[Read More]</a>
          ) : null}
        </p>
      </div>
    </div>
    );
  }
}

export default SearchBook;
