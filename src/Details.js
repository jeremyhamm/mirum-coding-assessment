import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailsHeader from './components/details-header.js';
import Footer from './components/footer.js';

class Details extends Component {
  constructor(props) {
    super(props);
    this.name = props.match.params.name;
  }
  render() {
    return (
      <div>
        <DetailsHeader name={this.name} />
        <div className="details-container">
          <div className="bread-crumb"><Link to="/">Home</Link> / {this.name}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Details;
