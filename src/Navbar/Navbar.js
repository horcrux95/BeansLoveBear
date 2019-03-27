import React, { Component } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid m-0">
        <div className="row m-0 p-0 customNav py-2">

          <div className="col-sm-6 d-flex justify-content-start align-items-center">
            <h2 className="customNavHeading">Beans Love Beers</h2>
          </div>

          <div className="col-sm-2 offset-sm-4 d-flex justify-content-around align-items-center ">
            <div className="customNavHeading">
              <NavLink  exact className="customNavHeading" to="/">Home</NavLink>
            </div>
            <div className="customNavHeading">
              <NavLink className="customNavHeading" to="/fav">Favourite</NavLink>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Navbar;
