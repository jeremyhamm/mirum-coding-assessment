import React, { Component } from 'react';
import '../styles/Details-Header.scss';

class DetailsHeader extends Component {
  render() {
    return <div className="details-header">
      <h1 className="details-title">{this.props.name}</h1>
    </div>
  }
}
  
export default DetailsHeader;