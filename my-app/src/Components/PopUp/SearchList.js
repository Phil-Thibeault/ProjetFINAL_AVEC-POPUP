import React, { Component } from "react";
import SearchBook from "./SearchBook";
import CarteLivre from "../Livre/CarteLivre";

class SearchList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="searchList">
      {this.props.books.map((book, index) => {
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
            readList={this.props.readList}
            wantList={this.props.wantList}
            currentPage={this.props.currentPage}
          />
        );
      })}
      </div>
    );
  }
}

export default SearchList;
