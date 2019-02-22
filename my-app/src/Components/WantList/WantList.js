import React, { Component } from "react";
import CarteLivre from "../Livre/CarteLivre";

class WantList extends Component {
  constructor(props) {
    super(props);

    this.state={
      books: this.props.wantList
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.readList !== prevProps.readList) {
      this.setState({
        books: this.props.wantList
      })
    }
    console.log(this.state.books);
  }

  render() {
    return (
      <div className="List">
        {this.state.books !== undefined ? (
          this.state.books.map((book, index) => {
            let image = book[0];
            let title = book[1];
            let author = book[2];

            return(
              <CarteLivre 
                key={index}
                img = {image}
                title = {title}
                author = {author}
              />
            );
          })
        ) : (<p>Nothing to show yet.</p>)}
      </div>
    );
  }
}

export default WantList;
