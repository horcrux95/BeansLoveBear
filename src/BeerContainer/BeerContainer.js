import React, { Component } from "react";
import BeerList from "../BeerList/BeerList";
import Search from "../Search/Search";

class BeerContainer extends Component {
  constructor() {
    super();
    this.inputHandler = this.inputHandler.bind(this);
    this.favBeerHandler = this.favBeerHandler.bind(this);
  }

  state = {
    filter: "",
    favBeer: []
  };

  componentDidMount() {
    if (sessionStorage.favBeer) {
      let Allbeers = JSON.parse(sessionStorage.favBeer);
      this.setState({ favBeer: Allbeers });
    }
  }
  inputHandler(filter) {
    this.setState({ filter: filter });
  }

  containsObject(obj, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === obj.id) {
        return true;
      }
    }

    return false;
  }

  favBeerHandler(beer) {
    if (this.containsObject(beer, this.state.favBeer) === true) {
      alert("Already your favourite");
    } else {

      if (typeof Storage !== "undefined") {
        let Allbeers = [];
        if (sessionStorage.favBeer) {
          Allbeers = JSON.parse(sessionStorage.favBeer);
        }
        Allbeers.push(beer);
        sessionStorage.setItem("favBeer", JSON.stringify(Allbeers));
        this.setState({ favBeer: Allbeers });
      }

    }
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.inputHandler} />
        <BeerList
          search={this.state.filter}
          favBeer={this.favBeerHandler}
          favBeerList={this.state.favBeer}
        />
      </div>
    );
  }
}

export default BeerContainer;
