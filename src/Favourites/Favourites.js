import React, { Component } from "react";


class Favourites extends Component {

    constructor(props) {
    super(props);
    this.state = {
      favBeer: []
    };
  }

  componentDidMount() {

    if (typeof Storage !== "undefined") {
      if (sessionStorage.favBeer) {
        let Allbeers = JSON.parse(sessionStorage.favBeer);
        this.setState({favBeer:Allbeers});
      }
    }
  }

  render() {
    let beers = "No beers Available Right now. Please come later";
    // console.log(this.state.favBeer.length);
    if (this.state.favBeer.length > 0) {
      beers = (
        <div className="row m-0 p-0 mt-4">
          {this.state.favBeer.map(beer => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3" key={beer.id}>
              <div className="card p-2">
                <div className="beerContainer d-flex">
                  <div className="beerImage d-flex align-items-center p-2">
                    <img
                      className="beerImage"
                      src={beer.image_url}
                      alt="NA"
                    />
                  </div>
                  <div className="beerContent p-3 ml-2 text-left">
                    <div className="beerName">
                      <h4>{beer.name}</h4>
                    </div>
                    <div className="beerDesc">
                      <p>{beer.description.slice(0, 150)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      );
    }
    return <div>{beers}</div>;
  }
}

export default Favourites;
