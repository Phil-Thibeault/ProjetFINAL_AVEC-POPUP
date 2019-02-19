import React, { Component } from "react";
import SearchBook from "./SearchBook";

const SearchList = props => {
  return (
    <div className="searchList">
      {props.books.map((book, index) => {
        let image = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : undefined;
        let author = book.volumeInfo.authors
          ? book.volumeInfo.authors
          : undefined;

        return (
          <SearchBook
            key={index}
            img={image}
            title={book.volumeInfo.title}
            author={author}
            datePublished={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description}
          />
        );
      })}
    </div>
  );
};

export default SearchList;
