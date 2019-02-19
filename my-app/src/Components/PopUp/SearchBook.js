import React, { Component } from "react";

const SearchBook = props => {
  let image;
  let author;

  if (props.img === undefined) {
    image = null;
  } else {
    image = props.img;
  }

  if (props.author === undefined) {
    author = "Unknown";
  } else {
    author = props.author;
  }
  return (
    <div className="book">
      <img src={image} alt="Book Cover" />
      <div className="allInfo">
        <div className="mainInfo">
          <div className="title">
            <h2 className="title">{props.title}</h2>
            <h2 className="author">{author}</h2>
          </div>
          <h3 className="date">{props.datePublished}</h3>
        </div>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default SearchBook;
