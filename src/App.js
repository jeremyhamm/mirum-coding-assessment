import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/header.js';
import Carousel from './components/carousel.js';
import Footer from './components/footer.js';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default App;
