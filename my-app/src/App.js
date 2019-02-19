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
      currentPage: <ReadList />,
      showButton: true,
      list: "Owned List",
      showPopUp: false
    };

    this.changePage = this.changePage.bind(this);
    this.popUp = this.popUp.bind(this);
  }

  changePage(page) {
    switch (parseInt(page)) {
      case 1:
      default:
        this.setState({
          currentPage: <ReadList />,
          showButton: true,
          list: "Owned List"
        });
        break;
      case 2:
        this.setState({
          currentPage: <WantList />,
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
          <PopUp text={this.state.list} closePopUp={this.popUp} />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default App;
