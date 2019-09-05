import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/header.js';
import Carousel from './components/carousel.js';
import Footer from './components/footer.js';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
