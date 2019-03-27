import React, { Component } from "react";
import "./App.css";
import BeerContainer from './BeerContainer/BeerContainer';
import Favourites from './Favourites/Favourites';
import { BrowserRouter } from "react-router-dom";
import { Route}  from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
class App extends Component {
  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Route path="/" exact component={BeerContainer} />
        <Route path="/fav" component={Favourites} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
