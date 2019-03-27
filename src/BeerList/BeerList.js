import React, { Component } from "react";
import "./BeerList.css";
import axios from "axios";
import star from "../assets/imgs/star.png";
import starunsaved from "../assets/imgs/starunsaved.png";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      favBeer: []
    };
  }

  fetchBeers() {
    axios
      .get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then(response => {
        const beers = response.data;
        if (this.props.search === "") {
          this.setState({ beers: beers });
        } else {
          let customSearch = [];

          for (let i = 0; i < beers.length; i++) {
            if (beers[i].name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1) {
              customSearch.push(beers[i]);
            }
          }
          // console.log(customSearch);
          this.setState({ beers: customSearch });
        }
        // console.log(this.state.beers);
      })
      .catch(error => {
        // this.setState( { error: true } );
      });
  }

  fetchFavBeer() {
    if (typeof Storage !== "undefined") {
      if (sessionStorage.favBeer) {
        let Allbeers = JSON.parse(sessionStorage.favBeer);
        this.setState({ favBeer: Allbeers });
      }
    }
  }

  componentDidMount() {
    this.fetchBeers();
    // this.fetchFavBeer();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.serach !== nextProps.search) {
      this.fetchBeers();
    }
  }

  checkFav(beerObject) {
    let found = false;
    for (let i = 0; i < this.props.favBeerList.length; i++) {
      if (this.props.favBeerList[i].name === beerObject.name) {
        found = true;
        break;
      }
    }
    let url = found === true ? star : starunsaved;
    return url;
  }

  render() {
    let beers = "No beers Available Right now. Please come later";

    if (this.state.beers.length > 0) {
      beers = (
        <div className="row m-0 p-0 mt-4">
          {this.state.beers.map(beer => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-3" key={beer.id}>
                <div className="card p-2">
                  <div className="favRow d-flex justify-content-end">
                    <img
                      src={this.checkFav(beer)}
                      alt="star"
                      className="favIcon"
                      onClick={() => this.props.favBeer(beer)}
                    />
                  </div>
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

export default BeerList;
