import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.refreshQuery = this.refreshQuery.bind(this);
  }

  refreshQuery(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div className="row m-0 p-0 mt-5">
        <div className="col-sm-12 col-md-6 offset-md-3 border-0 d-flex justify-content-center align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search for beer.."
            onChange={this.refreshQuery}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.props.onSearch(this.state.query);
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
