import React, { Component } from "react";

import Nav from "./Components/Nav/Nav";
import ReadList from "./Components/ReadList/ReadList";
import WantList from "./Components/WantList/WantList";
import Recommendations from "./Components/Recommendations/Recommendations";
import PopUp from "./Components/PopUp/PopUp";
import Footer from "./Components/Footer/Footer";

import "./Assets/css/default.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: <ReadList wantList={this.wantList}/>,
      showButton: true,
      list: "Owned List",
      showPopUp: false,
      readList: [],
      wantList: []
    };

    this.changePage = this.changePage.bind(this);
    this.popUp = this.popUp.bind(this);
    this.updateReadList = this.updateReadList.bind(this);
    this.updateWishList = this.updateWishList.bind(this);
  }

  updateReadList(array){
    let books = this.state.readList;

    books.push(array);

    this.setState({
      readList: books,
    });

    this.setState({
      currentPage: <ReadList readList={this.state.readList}/>,
      showButton: true,
      list: "Owned List"
    });
  }

  updateWishList(array){
    let books = this.state.wantList;

    books.push(array);

    this.setState({
      wantList: books,
    });

    this.setState({
      currentPage: <WantList wantList={this.state.wantList}/>,
      showButton: true,
      list: "Wish List"
    });
  }

  changePage(page) {
    switch (parseInt(page)) {
      case 1:
      default:
        this.setState({
          currentPage: <ReadList readList={this.state.readList}/>,
          showButton: true,
          list: "Owned List"
        });
        break;
      case 2:
        this.setState({
          currentPage: <WantList wantList={this.state.wantList}/>,
          showButton: true,
          list: "Wish List"
        });
        break;
      case 3:
        this.setState({
          currentPage: <Recommendations />,
          showButton: false,
          list: "reco"
        });
        break;
    }
  }

  popUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  render() {
    return (
      <div className="App">
        <Nav
          changePage={this.changePage}
          showButton={this.state.showButton}
          popUp={this.popUp}
        />
        {this.state.currentPage}
        {this.state.showPopUp ? (
          <PopUp text={this.state.list} closePopUp={this.popUp} readList={this.updateReadList} wantList={this.updateWishList} currentPage={this.state.currentPage.type.name}/>
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default App;
