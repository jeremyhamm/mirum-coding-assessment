import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailsHeader from './components/details-header.js';
import Footer from './components/footer.js';
import planetData from './assets/json/planets.json';

class Details extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  render() {
    this.name = this.props.match.params.name;
    const planetThumbnails = planetData.map(data => {
      return (
        <div className="planet-item" id={data.id}>
          <Link to={`/details/${data.name}`}>
            <img src={process.env.REACT_APP_PUBLIC_URL + '/images/thumbnails/' + data.name + '.jpg'} alt="Planet" height="75" width="75"></img>
          </Link>
        </div>
      )
    });
    const planetDetails = planetData.map(data => {
      if (data.name === this.name) {
        return (
          <div>
            <p>{data.description}</p>
            <p>
              <a href={data.wikipedia} target="_blank">Learn More...</a>
            </p>
          </div>
        )
      }
    });
    return (
      <div>
        <DetailsHeader name={this.name} />
        <div className="details-container">
          <div className="breadcrumb"><Link to="/">Home</Link> / {this.name}</div>
          <div className="selected-planet">
            <img src={process.env.REACT_APP_PUBLIC_URL + '/images/details/' + this.name + '.jpg'} alt="Planet" to={`/details/${this.name}`}></img>
          </div>
          <div className="list-container">
            <div className="planet-list">
              {planetThumbnails}
            </div>
            <div className="selected-planet-details">
              {planetDetails}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Details;
